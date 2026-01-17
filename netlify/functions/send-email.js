// const nodemailer = require('nodemailer');

// exports.handler = async function (event, context) {
//   if (event.httpMethod !== 'POST') {
//     return { statusCode: 405, body: 'Method Not Allowed' };
//   }

//   try {
//     const body = JSON.parse(event.body || '{}');
//     const { to, subject, text, html } = body;

//     const SMTP_HOST = process.env.SMTP_HOST;
//     const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
//     const SMTP_USER = process.env.SMTP_USER;
//     const SMTP_PASS = process.env.SMTP_PASS;
//     const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;

//     if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
//       return { statusCode: 500, body: 'SMTP not configured on server (missing env vars).' };
//     }

//     const transporter = nodemailer.createTransport({
//       host: SMTP_HOST,
//       port: SMTP_PORT,
//       secure: SMTP_PORT === 465, // true for 465, false for other ports
//       auth: {
//         user: SMTP_USER,
//         pass: SMTP_PASS,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: MAIL_FROM,
//       to,
//       subject,
//       text: text || '',
//       html: html || undefined,
//     });

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ ok: true, messageId: info.messageId }),
//     };
//   } catch (err) {
//     return { statusCode: 500, body: 'Error sending email: ' + (err.message || String(err)) };
//   }
// };

const nodemailer = require("nodemailer");
exports.handler = async (event) => {
  console.log("Function called with method:", event.httpMethod);
  console.log("Environment variables check:", {
    SMTP_HOST: process.env.SMTP_HOST ? "SET" : "MISSING",
    SMTP_USER: process.env.SMTP_USER ? "SET" : "MISSING",
    SMTP_PASS: process.env.SMTP_PASS ? "SET" : "MISSING",
    SMTP_PORT: process.env.SMTP_PORT || "587 (default)",
  });

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { to, subject, text, html } = body;
    console.log("Parsed request body:", {
      to,
      subject,
      hasText: !!text,
      hasHtml: !!html,
    });

    if (!to || !subject) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: "Missing required fields: to and subject",
        }),
      };
    }

    // Validate environment variables
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT
      ? Number(process.env.SMTP_PORT)
      : 587;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      const missing = [];
      if (!SMTP_HOST) missing.push("SMTP_HOST");
      if (!SMTP_USER) missing.push("SMTP_USER");
      if (!SMTP_PASS) missing.push("SMTP_PASS");

      console.error("Missing environment variables:", missing);
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          error: `SMTP not configured. Missing environment variables: ${missing.join(
            ", "
          )}`,
          debug: {
            SMTP_HOST: SMTP_HOST || "NOT SET",
            SMTP_USER: SMTP_USER || "NOT SET",
            SMTP_PASS: SMTP_PASS ? "SET (hidden)" : "NOT SET",
            SMTP_PORT: SMTP_PORT,
          },
        }),
      };
    }

    // Create transporter with proper configuration
    // Port 587 uses STARTTLS, port 465 uses direct TLS
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465 (direct TLS), false for 587 (STARTTLS)
      requireTLS: SMTP_PORT === 587, // Require TLS for port 587
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      // Increased timeouts for slow connections
      connectionTimeout: 30000, // 30 seconds
      greetingTimeout: 30000,
      socketTimeout: 30000,
      // Additional options for better compatibility
      tls: {
        // Do not fail on invalid certs (some SMTP servers have self-signed certs)
        rejectUnauthorized: false,
      },
      // Retry configuration
      pool: false,
      maxConnections: 1,
      maxMessages: 1,
      // Debug mode (set to false in production)
      debug: false,
      logger: false,
    });

    // Skip verification - it causes timeouts and isn't necessary
    // Just send the email directly
    console.log("Attempting to send email to:", to);

    // Send email with timeout handling
    const info = await Promise.race([
      transporter.sendMail({
        from: MAIL_FROM,
        to,
        subject,
        text: text || "",
        html: html || text || "",
      }),
      new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(
              new Error("Email send operation timed out after 30 seconds")
            ),
          30000
        )
      ),
    ]);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        messageId: info.messageId,
      }),
    };
  } catch (err) {
    console.error("Email send error:", err);
    console.error("Error stack:", err.stack);

    // Get SMTP config from env for error messages
    const SMTP_HOST_ERR = process.env.SMTP_HOST || "NOT SET";
    const SMTP_PORT_ERR = process.env.SMTP_PORT || "587";

    // Provide more helpful error messages
    let errorMessage = err.message || "Failed to send email";
    if (err.message && err.message.includes("Timeout")) {
      errorMessage = `SMTP connection timeout connecting to ${SMTP_HOST_ERR}:${SMTP_PORT_ERR}. This could be due to:
- Firewall blocking the connection
- SMTP server not accepting connections from this IP
- Network connectivity issues
- Incorrect SMTP server settings`;
    } else if (err.message && err.message.includes("ECONNREFUSED")) {
      errorMessage = `Cannot connect to SMTP server ${SMTP_HOST_ERR}:${SMTP_PORT_ERR}. Check if the server is accessible.`;
    } else if (err.message && err.message.includes("EAUTH")) {
      errorMessage =
        "SMTP authentication failed. Please check your SMTP username and password.";
    }

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: errorMessage,
        details: process.env.NODE_ENV === "development" ? err.stack : undefined,
        smtpConfig:
          process.env.NODE_ENV === "development"
            ? {
                host: SMTP_HOST_ERR,
                port: SMTP_PORT_ERR,
                user: process.env.SMTP_USER ? "SET" : "NOT SET",
              }
            : undefined,
      }),
    };
  }
};
