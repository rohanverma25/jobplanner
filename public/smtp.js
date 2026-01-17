// // Local fallback smtp.js stub for development
// // This is NOT the official smtpjs implementation.
// // Place the real `smtp.js` from https://smtpjs.com/v3/smtp.js here for actual SMTP relay behavior.

// (function () {
//   if (typeof window === 'undefined') return;
//   if (window.Email && typeof window.Email.send === 'function') return;

//   window.Email = {
//     // This `send` function is a simple stub that attempts to detect a local
//     // backend endpoint `/api/send-email` and forward the payload there.
//     // If no backend endpoint is available, it rejects with a helpful message.
//     send: function (payload) {
//       // Normalize fields
//       var to = payload.To || payload.to || payload.toAddress || '';
//       var subject = payload.Subject || payload.subject || '';
//       var body = payload.Body || payload.body || payload.Message || '';

//       // If a backend endpoint exists, forward the payload as JSON.
//       if (window.fetch) {
//         // Try posting to /api/send-email if present. Backend implementation
//         // (recommended) should accept { to, subject, text, html }.
//         return fetch('/api/send-email', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ to: to, subject: subject, text: body }),
//         }).then(function (res) {
//           if (!res.ok) throw new Error('Backend /api/send-email responded with ' + res.status);
//           return res.text();
//         }).catch(function (err) {
//           return Promise.reject(new Error('smtp.js stub: failed to send via /api/send-email (' + err.message + ').\n\nTo send emails from the browser, either: (1) add the official smtpjs script to this file (download from https://smtpjs.com/v3/smtp.js), or (2) implement a server-side /api/send-email endpoint (recommended).'));
//         });
//       }

//       return Promise.reject(new Error('smtp.js stub: no fetch available to forward mail and official smtp.js not installed.'));
//     }
//   };
// })();

// Local fallback smtp.js stub for development
// This forwards email requests to the Netlify function endpoint

(function () {
  if (typeof window === "undefined") return;
  if (window.Email && typeof window.Email.send === "function") return;

  window.Email = {
    // This `send` function forwards the email to the Netlify function
    send: function (payload) {
      // Normalize fields
      var to = payload.To || payload.to || payload.toAddress || "";
      var subject = payload.Subject || payload.subject || "";
      var body = payload.Body || payload.body || payload.Message || "";

      // Forward to Netlify function
      if (window.fetch) {
        return fetch("/.netlify/functions/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: to, subject: subject, text: body }),
        }).then(function (res) {
          if (!res.ok) {
            return res.text().then(function (errorText) {
              var errorMsg = errorText;
              try {
                var errorJson = JSON.parse(errorText);
                errorMsg = errorJson.error || errorText;
              } catch (e) {
                // Use raw error text
              }
              throw new Error("Netlify function error: " + errorMsg);
            });
          }
          return res.json().then(function (data) {
            return data.message || "Email sent successfully";
          });
        });
      }

      return Promise.reject(new Error("smtp.js stub: fetch API not available"));
    },
  };
})();
