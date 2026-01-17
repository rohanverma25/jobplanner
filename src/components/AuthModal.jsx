// import React, { useState, useRef } from "react";
// import { useAuth } from "../authContext";
// import { useNavigate } from "react-router-dom";
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import {
//   DynamoDBDocumentClient,
//   GetCommand,
//   PutCommand,
//   UpdateCommand,
// } from "@aws-sdk/lib-dynamodb";
// import bcrypt from "bcryptjs";

// const REGION = "ap-south-1";
// const USERS_TABLE = "users";

// // WARNING: Still running in Client-Side mode.
// const ddbClient = new DynamoDBClient({
//   region: REGION,
//   credentials: {
//     accessKeyId: "AKIA4I7NMZFEAAKGEU55", // Replace with your key
//     secretAccessKey: "oZi8N/XVNDbhEaJMB8V64ZWOBT3Tf6/gEORhrY5x", // Replace with your secret
//   },
// });
// const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// // SMTP Loader and Sender (Kept for Forgot Password functionality)
// const SMTP_HOST = "smtp.hostinger.com";
// const SMTP_USERNAME = "info@jobplanner.co.in";
// const SMTP_PASSWORD = "Muslima@12345"; // Replace with your password
// const SMTP_PORT = 587;
// const MAIL_FROM = SMTP_USERNAME;

// function loadSmtpJs() {
//   return new Promise((resolve, reject) => {
//     if (typeof window === "undefined")
//       return reject(new Error("Not running in browser"));
//     if (window.Email && typeof window.Email.send === "function")
//       return resolve();

//     const remoteSrc = "https://smtpjs.com/v3/smtp.js";
//     const localSrc = "/smtp.js";

//     function insertScript(src, onload, onerror) {
//       const s = document.createElement("script");
//       s.src = src;
//       s.onload = onload;
//       s.onerror = onerror;
//       document.head.appendChild(s);
//       return s;
//     }

//     insertScript(
//       remoteSrc,
//       () => resolve(),
//       () => {
//         insertScript(
//           localSrc,
//           () => resolve(),
//           () => reject(new Error("Failed to load smtp.js"))
//         );
//       }
//     );
//   });
// }

// // async function sendEmailSmtp({ to, subject, body }) {
// //   try {
// //     const res = await fetch("./netlify/functions/send-email", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ to, subject, text: body }),
// //     });
// //     if (!res.ok) throw new Error(await res.text());
// //     return await res.text();
// //   } catch (serverErr) {
// //     try {
// //       await loadSmtpJs();
// //       // eslint-disable-next-line no-undef
// //       return window.Email.send({
// //         Host: SMTP_HOST,
// //         Username: SMTP_USERNAME,
// //         Password: SMTP_PASSWORD,
// //         Port: SMTP_PORT,
// //         To: to,
// //         From: MAIL_FROM,
// //         Subject: subject,
// //         Body: body,
// //       });
// //     } catch (clientErr) {
// //       throw serverErr;
// //     }
// //   }
// // }

// // --- Styles ---

// async function sendEmailSmtp({ to, subject, body }) {
//   try {
//     const res = await fetch("/.netlify/functions/send-email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ to, subject, text: body }),
//     });

//     // Handle 404 or 500 (function not available or not working)
//     if (res.status === 404 || res.status === 500) {
//       // Try to get error message
//       let errorMsg = "Function not available";
//       try {
//         const errorText = await res.text();
//         const errorJson = JSON.parse(errorText);
//         errorMsg = errorJson.error || errorText;
//       } catch {
//         // Ignore parsing errors
//       }
//       throw new Error("NETLIFY_FUNCTION_NOT_AVAILABLE");
//     }

//     if (!res.ok) {
//       const errorText = await res.text();
//       let errorMessage = errorText;
//       try {
//         const errorJson = JSON.parse(errorText);
//         errorMessage = errorJson.error || errorText;
//       } catch {
//         // If parsing fails, use the text as is
//       }
//       throw new Error(errorMessage);
//     }
//     const result = await res.json();
//     return result;
//   } catch (serverErr) {
//     // If it's a 404/500 or network error, fallback to client-side SMTP.js
//     const shouldFallback =
//       serverErr.message === "NETLIFY_FUNCTION_NOT_AVAILABLE" ||
//       serverErr.message === "NETLIFY_FUNCTION_NOT_FOUND" ||
//       serverErr.message.includes("Failed to fetch") ||
//       serverErr.message.includes("NetworkError") ||
//       serverErr.message.includes("500");

//     if (shouldFallback) {
//       console.warn(
//         "Netlify function not available, using client-side SMTP fallback"
//       );
//     }

//     // Fallback to client-side SMTP.js if server function fails
//     try {
//       await loadSmtpJs();

//       // Check if we have the real SMTP.js (not the stub)
//       if (!window.Email || typeof window.Email.send !== "function") {
//         throw new Error("SMTP.js library not loaded");
//       }

//       // eslint-disable-next-line no-undef
//       const emailResult = await window.Email.send({
//         Host: SMTP_HOST,
//         Username: SMTP_USERNAME,
//         Password: SMTP_PASSWORD,
//         Port: SMTP_PORT,
//         To: to,
//         From: MAIL_FROM,
//         Subject: subject,
//         Body: body,
//       });
//       return { success: true, message: emailResult };
//     } catch (clientErr) {
//       // If both fail, throw a combined error message
//       throw new Error(
//         `Email sending failed. Server error: ${serverErr.message}. Client fallback error: ${clientErr.message}`
//       );
//     }
//   }
// }

// const overlayStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   background: "rgba(64,71,75,0.47)",
//   zIndex: 2100,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontFamily: "Tahoma, Arial, sans-serif",
// };
// const modalStyle = {
//   background: "#fff",
//   borderRadius: "13px",
//   padding: "3rem 2.8rem 2.8rem 3rem",
//   boxShadow: "0 8px 44px rgba(20,50,90,0.18)",
//   minWidth: "300px",
//   maxWidth: "500px",
//   width: "100%",
//   fontFamily: "Tahoma, Arial, sans-serif",
//   position: "relative",
// };
// const xBtnStyle = {
//   position: "absolute",
//   top: "13px",
//   right: "15px",
//   background: "none",
//   border: "none",
//   fontSize: "1.39rem",
//   color: "#888",
//   cursor: "pointer",
// };
// const tabRow = {
//   display: "flex",
//   gap: "1.6rem",
//   justifyContent: "center",
//   alignItems: "center",
//   marginBottom: "1.2rem",
// };
// const tabBtn = (active) => ({
//   background: "none",
//   border: "none",
//   fontWeight: active ? 700 : 500,
//   fontSize: "1.09rem",
//   color: active ? "#1888be" : "#888",
//   borderBottom: active ? "2px solid #2196f3" : "2px solid transparent",
//   paddingBottom: "2px",
//   cursor: "pointer",
//   transition: "color .14s, border-bottom .15s",
// });
// const formStyle = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "1.05rem",
//   alignItems: "center",
//   margin: "0 auto",
// };
// // Relative wrapper for Password + Eye Icon
// const passwordWrapperStyle = {
//   position: "relative",
//   width: "97%",
// };
// const inputStyle = {
//   height: "37px",
//   borderRadius: "6px",
//   border: "1.4px solid #cfd8dc",
//   fontSize: "1rem",
//   padding: "0 0.75rem",
//   width: "100%", // Changed to 100% because it's inside the wrapper or styled directly
//   boxSizing: "border-box", // Ensures padding doesn't break width
//   fontFamily: "Tahoma, Arial, sans-serif",
//   background: "#f6fafc",
// };
// // Helper for inputs that aren't passwords to keep width consistent
// const standardInputStyle = {
//   ...inputStyle,
//   width: "97%",
// };

// const eyeBtnStyle = {
//   position: "absolute",
//   right: "10px",
//   top: "50%",
//   transform: "translateY(-50%)",
//   background: "none",
//   border: "none",
//   cursor: "pointer",
//   color: "#888",
//   padding: 0,
//   display: "flex",
//   alignItems: "center",
// };

// const btnSubmit = {
//   width: "100%",
//   margin: "0 auto",
//   background: "#4ba7b0",
//   color: "#fff",
//   fontWeight: 700,
//   fontSize: "1.09rem",
//   border: "none",
//   borderRadius: "22px",
//   padding: "0.78rem 0",
//   letterSpacing: "0.04em",
//   cursor: "pointer",
//   display: "block",
//   marginTop: ".6rem",
// };
// const bottomRow = {
//   textAlign: "center",
//   fontSize: "0.98rem",
//   color: "#888",
//   marginTop: "0.2rem",
// };
// const linkStyle = {
//   color: "#2196f3",
//   fontWeight: 600,
//   textDecoration: "none",
//   cursor: "pointer",
// };
// const errorStyle = {
//   color: "#b80000",
//   background: "#fff7f7",
//   borderRadius: "6px",
//   fontWeight: "600",
//   fontSize: "0.97rem",
//   margin: "0.35rem 0 0.2rem 0",
//   padding: "0.3rem 0.75rem",
//   textAlign: "center",
// };
// const successStyle = {
//   color: "#176c17",
//   background: "#f2fef3",
//   borderRadius: "6px",
//   fontWeight: "600",
//   fontSize: "0.97rem",
//   margin: "0.35rem 0 0.2rem 0",
//   padding: "0.3rem 0.75rem",
//   textAlign: "center",
// };
// const tncRowStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-start",
//   width: "100%",
//   fontSize: "0.97rem",
//   margin: "0.1rem 0 0 0",
// };

// // Simple Eye Icons (SVG)
// const EyeIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//     <circle cx="12" cy="12" r="3"></circle>
//   </svg>
// );
// const EyeOffIcon = () => (
//   <svg
//     width="20"
//     height="20"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M1 1l22 22"></path>
//     <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>
//   </svg>
// );

// export default function AuthModal({ open, onClose }) {
//   const [tab, setTab] = useState("login");
//   const [fields, setFields] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirm: "",
//     tncChecked: true,
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Show/Hide password toggle state
//   const [showPassword, setShowPassword] = useState(false);

//   // Forgot Password States
//   const [forgotStep, setForgotStep] = useState(false);
//   const [forgotEmail, setForgotEmail] = useState("");
//   const [forgotLoading, setForgotLoading] = useState(false);
//   const [resetStep, setResetStep] = useState(false);
//   const [resetFields, setResetFields] = useState({
//     otp: "",
//     password: "",
//     confirm: "",
//   });

//   const overlayRef = useRef(null);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   function clearAllStates() {
//     setFields({
//       name: "",
//       email: "",
//       mobile: "",
//       password: "",
//       confirm: "",
//       tncChecked: true,
//     });
//     setLoading(false);
//     setError("");
//     setSuccess("");
//     setForgotStep(false);
//     setForgotEmail("");
//     setForgotLoading(false);
//     setResetStep(false);
//     setResetFields({ otp: "", password: "", confirm: "" });
//     setShowPassword(false);
//   }

//   // --- UPDATED: Direct Signup (No OTP) ---
//   async function handleRegister(e) {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     // Validation
//     if (
//       !fields.name ||
//       !fields.email ||
//       !fields.mobile ||
//       !fields.password ||
//       !fields.confirm
//     ) {
//       setError("All fields required.");
//       return;
//     }
//     if (fields.password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return;
//     }
//     if (fields.password !== fields.confirm) {
//       setError("Passwords do not match.");
//       return;
//     }
//     if (!fields.tncChecked) {
//       setError("You must accept Terms & Conditions.");
//       return;
//     }

//     setLoading(true);

//     try {
//       // 1. Check if user exists
//       const getUserRes = await ddbDocClient.send(
//         new GetCommand({ TableName: USERS_TABLE, Key: { email: fields.email } })
//       );
//       if (getUserRes.Item) {
//         setLoading(false);
//         setError("User already exists");
//         return;
//       }

//       // 2. Hash Password
//       const passwordHash = await bcrypt.hash(fields.password, 10);

//       // 3. Create User Object (Status ACTIVE immediately)
//       const userItem = {
//         email: fields.email,
//         name: fields.name,
//         mobile: fields.mobile,
//         passwordHash,
//         status: "active", // Direct active status
//         createdAt: new Date().toISOString(),
//       };

//       // 4. Save to DynamoDB
//       await ddbDocClient.send(
//         new PutCommand({
//           TableName: USERS_TABLE,
//           Item: userItem,
//         })
//       );

//       setLoading(false);
//       setSuccess("Registration successful! Logging you in...");

//       // 5. Auto Login & Redirect
//       const { passwordHash: ph, ...userProfile } = userItem;
//       login(userProfile);

//       setTimeout(() => {
//         clearAllStates();
//         onClose && onClose();
//         navigate("/profile");
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//       setError("Registration failed. Network error.");
//     }
//   }

//   async function handleLogin(e) {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const getUserRes = await ddbDocClient.send(
//         new GetCommand({ TableName: USERS_TABLE, Key: { email: fields.email } })
//       );
//       const user = getUserRes.Item;
//       if (!user) {
//         setLoading(false);
//         setError("Account not found.");
//         return;
//       }
//       // Since we removed OTP verify, some legacy users might be 'pending'.
//       // You might want to allow them or force them to contact support.
//       // For now, we assume if they exist, they can try to log in.

//       const valid = await bcrypt.compare(fields.password, user.passwordHash);
//       if (!valid) {
//         setLoading(false);
//         setError("Incorrect password.");
//         return;
//       }

//       setLoading(false);
//       setSuccess("Login successful!");
//       const { passwordHash, otp, otpExpires, ...userProfile } = user;
//       login(userProfile);
//       setTimeout(() => {
//         clearAllStates();
//         onClose && onClose();
//         navigate("/profile");
//       }, 500);
//     } catch (err) {
//       setLoading(false);
//       setError("Login failed. Network error.");
//     }
//   }

//   // --- Forgot Password Logic (Kept Intact) ---
//   async function handleForgotSubmit(e) {
//     e.preventDefault();
//     setError("");
//     setForgotLoading(true);
//     try {
//       const getUserRes = await ddbDocClient.send(
//         new GetCommand({ TableName: USERS_TABLE, Key: { email: forgotEmail } })
//       );
//       const user = getUserRes.Item;
//       if (!user) {
//         setForgotLoading(false);
//         setError("Account not found");
//         return;
//       }
//       const otp = Math.floor(100000 + Math.random() * 900000).toString();
//       await ddbDocClient.send(
//         new UpdateCommand({
//           TableName: USERS_TABLE,
//           Key: { email: forgotEmail },
//           UpdateExpression: "SET otp = :otp, otpExpires = :exp",
//           ExpressionAttributeValues: {
//             ":otp": otp,
//             ":exp": Date.now() + 10 * 60 * 1000,
//           },
//         })
//       );
//       await sendEmailSmtp({
//         to: forgotEmail,
//         subject: "JobPlanner Password Reset OTP",
//         body: `Your password reset OTP is: ${otp}`,
//       });
//       setForgotLoading(false);
//       setSuccess("OTP sent for password reset.");
//       setResetStep(true);
//     } catch (err) {
//       setForgotLoading(false);
//       console.log("send email error",err)
//       setError("Failed to send OTP. Network error.");
//     }
//   }

//   async function handleResetSubmit(e) {
//     e.preventDefault();
//     setError("");
//     if (
//       !resetFields.password ||
//       !resetFields.confirm ||
//       resetFields.password !== resetFields.confirm
//     ) {
//       setError("Passwords must match.");
//       return;
//     }
//     setForgotLoading(true);
//     try {
//       const getUserRes = await ddbDocClient.send(
//         new GetCommand({ TableName: USERS_TABLE, Key: { email: forgotEmail } })
//       );
//       const user = getUserRes.Item;
//       if (!user) {
//         setForgotLoading(false);
//         setError("Account not found");
//         return;
//       }
//       if (user.otp !== resetFields.otp || Date.now() > user.otpExpires) {
//         setForgotLoading(false);
//         setError("Invalid or expired OTP");
//         return;
//       }
//       const passwordHash = await bcrypt.hash(resetFields.password, 10);
//       await ddbDocClient.send(
//         new UpdateCommand({
//           TableName: USERS_TABLE,
//           Key: { email: forgotEmail },
//           UpdateExpression: "SET passwordHash = :hash REMOVE otp, otpExpires",
//           ExpressionAttributeValues: { ":hash": passwordHash },
//         })
//       );
//       setForgotLoading(false);
//       setSuccess("Password reset successfully. You can now login.");
//       setTimeout(() => {
//         clearAllStates();
//         setTab("login");
//       }, 1400);
//     } catch (err) {
//       setForgotLoading(false);
//       setError("Failed to reset password. Network error.");
//     }
//   }

//   function handleTabSwitch(mode) {
//     setTab(mode);
//     clearAllStates();
//   }

//   function handleOverlayClick(e) {
//     if (e.target === overlayRef.current) onClose && onClose();
//   }

//   if (!open) return null;
//   const tncLink = "/terms-and-conditions";

//   return (
//     <div style={overlayStyle} ref={overlayRef} onClick={handleOverlayClick}>
//       <div style={modalStyle}>
//         <button
//           style={xBtnStyle}
//           onClick={() => {
//             clearAllStates();
//             onClose && onClose();
//           }}
//           aria-label="Close"
//         >
//           &times;
//         </button>
//         <div style={tabRow}>
//           <button
//             style={tabBtn(tab === "login")}
//             onClick={() => handleTabSwitch("login")}
//           >
//             Login
//           </button>
//           <button
//             style={tabBtn(tab === "signup")}
//             onClick={() => handleTabSwitch("signup")}
//           >
//             Sign Up
//           </button>
//         </div>

//         {/* Registration Form (Direct Signup) */}
//         {tab === "signup" && (
//           <form style={formStyle} onSubmit={handleRegister} autoComplete="off">
//             <input
//               type="text"
//               name="name"
//               required
//               placeholder="Full Name"
//               style={standardInputStyle}
//               value={fields.name}
//               onChange={(e) => setFields({ ...fields, name: e.target.value })}
//             />
//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="Email"
//               style={standardInputStyle}
//               value={fields.email}
//               onChange={(e) => setFields({ ...fields, email: e.target.value })}
//             />
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Mobile Number"
//               pattern="[0-9]{10,12}"
//               maxLength={12}
//               minLength={10}
//               required
//               style={standardInputStyle}
//               value={fields.mobile}
//               onChange={(e) =>
//                 setFields({
//                   ...fields,
//                   mobile: e.target.value.replace(/[^\d]/g, ""),
//                 })
//               }
//             />

//             {/* Password Field with Show/Hide */}
//             <div style={passwordWrapperStyle}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 required
//                 placeholder="Create Password"
//                 style={inputStyle}
//                 value={fields.password}
//                 onChange={(e) =>
//                   setFields({ ...fields, password: e.target.value })
//                 }
//               />
//               <button
//                 type="button"
//                 style={eyeBtnStyle}
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//               </button>
//             </div>

//             {/* Confirm Password Field with Show/Hide */}
//             <div style={passwordWrapperStyle}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="confirm"
//                 required
//                 placeholder="Confirm Password"
//                 style={inputStyle}
//                 value={fields.confirm}
//                 onChange={(e) =>
//                   setFields({ ...fields, confirm: e.target.value })
//                 }
//               />
//               <button
//                 type="button"
//                 style={eyeBtnStyle}
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//               </button>
//             </div>

//             <div style={tncRowStyle}>
//               <input
//                 type="checkbox"
//                 id="tnc"
//                 checked={fields.tncChecked}
//                 onChange={(e) =>
//                   setFields({ ...fields, tncChecked: e.target.checked })
//                 }
//                 style={{ marginRight: "0.7rem" }}
//               />
//               <label htmlFor="tnc">
//                 I agree to the{" "}
//                 <a
//                   href={tncLink}
//                   style={{ ...linkStyle, color: "#0070f3" }}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Terms & Conditions
//                 </a>
//               </label>
//             </div>
//             {error && <div style={errorStyle}>{error}</div>}
//             {success && <div style={successStyle}>{success}</div>}
//             <button type="submit" style={btnSubmit} disabled={loading}>
//               {loading ? "Processing..." : "Sign Up"}
//             </button>
//           </form>
//         )}

//         {/* Login Form */}
//         {tab === "login" && !forgotStep && (
//           <form style={formStyle} onSubmit={handleLogin} autoComplete="off">
//             <input
//               type="email"
//               name="email"
//               required
//               placeholder="Email"
//               style={standardInputStyle}
//               value={fields.email}
//               onChange={(e) => setFields({ ...fields, email: e.target.value })}
//             />
//             <div style={passwordWrapperStyle}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 required
//                 placeholder="Password"
//                 style={inputStyle}
//                 value={fields.password}
//                 onChange={(e) =>
//                   setFields({ ...fields, password: e.target.value })
//                 }
//               />
//               <button
//                 type="button"
//                 style={eyeBtnStyle}
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//               </button>
//             </div>
//             {error && <div style={errorStyle}>{error}</div>}
//             {success && <div style={successStyle}>{success}</div>}
//             <button type="submit" style={btnSubmit} disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>
//         )}

//         {/* Forgot Password - Email Step */}
//         {tab === "login" && forgotStep && !resetStep && (
//           <form
//             style={formStyle}
//             onSubmit={handleForgotSubmit}
//             autoComplete="off"
//           >
//             <input
//               type="email"
//               name="forgotEmail"
//               required
//               placeholder="Registered Email"
//               style={standardInputStyle}
//               value={forgotEmail}
//               onChange={(e) => setForgotEmail(e.target.value)}
//             />
//             {error && <div style={errorStyle}>{error}</div>}
//             {success && <div style={successStyle}>{success}</div>}
//             <button type="submit" style={btnSubmit} disabled={forgotLoading}>
//               {forgotLoading ? "Sending OTP..." : "Send OTP"}
//             </button>
//           </form>
//         )}

//         {/* Forgot Password - OTP + New Password Step */}
//         {tab === "login" && forgotStep && resetStep && (
//           <form
//             style={formStyle}
//             onSubmit={handleResetSubmit}
//             autoComplete="off"
//           >
//             <input
//               type="text"
//               name="otp"
//               required
//               placeholder="Enter OTP"
//               style={standardInputStyle}
//               maxLength={6}
//               value={resetFields.otp}
//               onChange={(e) =>
//                 setResetFields({
//                   ...resetFields,
//                   otp: e.target.value.replace(/[^\d]/g, ""),
//                 })
//               }
//             />
//             <div style={passwordWrapperStyle}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 required
//                 placeholder="New Password"
//                 style={inputStyle}
//                 value={resetFields.password}
//                 onChange={(e) =>
//                   setResetFields({ ...resetFields, password: e.target.value })
//                 }
//               />
//               <button
//                 type="button"
//                 style={eyeBtnStyle}
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//               </button>
//             </div>
//             <div style={passwordWrapperStyle}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="confirm"
//                 required
//                 placeholder="Confirm New Password"
//                 style={inputStyle}
//                 value={resetFields.confirm}
//                 onChange={(e) =>
//                   setResetFields({ ...resetFields, confirm: e.target.value })
//                 }
//               />
//               <button
//                 type="button"
//                 style={eyeBtnStyle}
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? <EyeOffIcon /> : <EyeIcon />}
//               </button>
//             </div>
//             {error && <div style={errorStyle}>{error}</div>}
//             {success && <div style={successStyle}>{success}</div>}
//             <button type="submit" style={btnSubmit} disabled={forgotLoading}>
//               {forgotLoading ? "Resetting..." : "Reset Password"}
//             </button>
//           </form>
//         )}

//         {/* Bottom links */}
//         {tab === "login" && !forgotStep && (
//           <div style={bottomRow}>
//             Not a member yet?&nbsp;
//             <span style={linkStyle} onClick={() => handleTabSwitch("signup")}>
//               Sign Up.
//             </span>
//             <br />
//             <span
//               style={{ ...linkStyle, marginTop: "0.37rem", color: "#2176f3" }}
//               onClick={() => {
//                 clearAllStates();
//                 setForgotStep(true);
//               }}
//             >
//               Forgot Password?
//             </span>
//           </div>
//         )}
//         {tab === "signup" && (
//           <div style={bottomRow}>
//             Already have an account?&nbsp;
//             <span style={linkStyle} onClick={() => handleTabSwitch("login")}>
//               Login here.
//             </span>
//           </div>
//         )}
//         {forgotStep && !resetStep && (
//           <div style={bottomRow}>
//             Remember your password?&nbsp;
//             <span
//               style={linkStyle}
//               onClick={() => {
//                 clearAllStates();
//                 setTab("login");
//               }}
//             >
//               Login
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import React, { useState, useRef } from "react";
import { useAuth } from "../authContext";
import { useNavigate } from "react-router-dom";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import bcrypt from "bcryptjs";

const REGION = "ap-south-1";
const USERS_TABLE = "users";

// WARNING: Still running in Client-Side mode.
const ddbClient = new DynamoDBClient({
  region: REGION,
  credentials: {
    accessKeyId: "AKIA4I7NMZFEAAKGEU55", // Replace with your key
    secretAccessKey: "oZi8N/XVNDbhEaJMB8V64ZWOBT3Tf6/gEORhrY5x", // Replace with your secret
  },
});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

// SMTP Loader and Sender (Kept for Forgot Password functionality)
const SMTP_HOST = "smtp.hostinger.com";
const SMTP_USERNAME = "info@jobplanner.co.in";
const SMTP_PASSWORD = "Muslima@12345"; // Replace with your password
const SMTP_PORT = 587;
const MAIL_FROM = SMTP_USERNAME;

function loadSmtpJs() {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined")
      return reject(new Error("Not running in browser"));
    if (window.Email && typeof window.Email.send === "function")
      return resolve();

    const remoteSrc = "https://smtpjs.com/v3/smtp.js";
    const localSrc = "/smtp.js";

    function insertScript(src, onload, onerror) {
      const s = document.createElement("script");
      s.src = src;
      s.onload = onload;
      s.onerror = onerror;
      document.head.appendChild(s);
      return s;
    }

    insertScript(
      remoteSrc,
      () => resolve(),
      () => {
        insertScript(
          localSrc,
          () => resolve(),
          () => reject(new Error("Failed to load smtp.js"))
        );
      }
    );
  });
}

async function sendEmailSmtp({ to, subject, body }) {
  try {
    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, subject, text: body }),
    });
    
    // Handle 404 or 500 (function not available or not working)
    if (res.status === 404 || res.status === 500) {
      // Try to get error message
      let errorMsg = "Function not available";
      let errorDetails = null;
      try {
        const errorText = await res.text();
        try {
          const errorJson = JSON.parse(errorText);
          errorMsg = errorJson.error || errorText;
          errorDetails = errorJson.debug || errorJson.details;
        } catch {
          // If JSON parsing fails, use the raw text
          errorMsg = errorText || errorMsg;
        }
        console.error('Netlify function error:', errorMsg);
        if (errorDetails) {
          console.error('Error details:', errorDetails);
        }
      } catch (readErr) {
        console.error('Could not read error response:', readErr);
      }
      
      // Provide helpful error message
      if (errorMsg.includes('Missing environment variables') || errorMsg.includes('SMTP not configured')) {
        throw new Error(
          `Email service configuration error: ${errorMsg}. ` +
          `Please check that SMTP environment variables are set in netlify.toml or Netlify dashboard.`
        );
      }
      
      throw new Error(`Email service error: ${errorMsg}`);
    }
    
    if (!res.ok) {
      const errorText = await res.text();
      let errorMessage = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || errorText;
      } catch {
        // If parsing fails, use the text as is
      }
      throw new Error(errorMessage);
    }
    const result = await res.json();
    return result;
  } catch (serverErr) {
    // Log the full error for debugging
    console.error('Email send error:', serverErr);
    
    // Re-throw with user-friendly message
    if (serverErr.message.includes('Failed to fetch') || serverErr.message.includes('NetworkError')) {
      throw new Error(
        'Cannot connect to email service. ' +
        'Please check that the Netlify function is running and accessible.'
      );
    }
    
    throw serverErr;
  }
}

// async function sendEmailSmtp({ to, subject, body }) {
//   const res = await fetch('/.netlify/functions/send-email', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ to, subject, text: body }),
//   });

//   if (!res.ok) {
//     throw new Error(await res.text());
//   }

//   return res.json();
// }

// --- Styles ---

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(64,71,75,0.47)",
  zIndex: 2100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Tahoma, Arial, sans-serif",
};
const modalStyle = {
  background: "#fff",
  borderRadius: "13px",
  padding: "3rem 2.8rem 2.8rem 3rem",
  boxShadow: "0 8px 44px rgba(20,50,90,0.18)",
  minWidth: "300px",
  maxWidth: "500px",
  width: "100%",
  fontFamily: "Tahoma, Arial, sans-serif",
  position: "relative",
};
const xBtnStyle = {
  position: "absolute",
  top: "13px",
  right: "15px",
  background: "none",
  border: "none",
  fontSize: "1.39rem",
  color: "#888",
  cursor: "pointer",
};
const tabRow = {
  display: "flex",
  gap: "1.6rem",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1.2rem",
};
const tabBtn = (active) => ({
  background: "none",
  border: "none",
  fontWeight: active ? 700 : 500,
  fontSize: "1.09rem",
  color: active ? "#1888be" : "#888",
  borderBottom: active ? "2px solid #2196f3" : "2px solid transparent",
  paddingBottom: "2px",
  cursor: "pointer",
  transition: "color .14s, border-bottom .15s",
});
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.05rem",
  alignItems: "center",
  margin: "0 auto",
};
// Relative wrapper for Password + Eye Icon
const passwordWrapperStyle = {
  position: "relative",
  width: "97%",
};
const inputStyle = {
  height: "37px",
  borderRadius: "6px",
  border: "1.4px solid #cfd8dc",
  fontSize: "1rem",
  padding: "0 0.75rem",
  width: "100%", // Changed to 100% because it's inside the wrapper or styled directly
  boxSizing: "border-box", // Ensures padding doesn't break width
  fontFamily: "Tahoma, Arial, sans-serif",
  background: "#f6fafc",
};
// Helper for inputs that aren't passwords to keep width consistent
const standardInputStyle = {
  ...inputStyle,
  width: "97%",
};

const eyeBtnStyle = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#888",
  padding: 0,
  display: "flex",
  alignItems: "center",
};

const btnSubmit = {
  width: "100%",
  margin: "0 auto",
  background: "#4ba7b0",
  color: "#fff",
  fontWeight: 700,
  fontSize: "1.09rem",
  border: "none",
  borderRadius: "22px",
  padding: "0.78rem 0",
  letterSpacing: "0.04em",
  cursor: "pointer",
  display: "block",
  marginTop: ".6rem",
};
const bottomRow = {
  textAlign: "center",
  fontSize: "0.98rem",
  color: "#888",
  marginTop: "0.2rem",
};
const linkStyle = {
  color: "#2196f3",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
};
const errorStyle = {
  color: "#b80000",
  background: "#fff7f7",
  borderRadius: "6px",
  fontWeight: "600",
  fontSize: "0.97rem",
  margin: "0.35rem 0 0.2rem 0",
  padding: "0.3rem 0.75rem",
  textAlign: "center",
};
const successStyle = {
  color: "#176c17",
  background: "#f2fef3",
  borderRadius: "6px",
  fontWeight: "600",
  fontSize: "0.97rem",
  margin: "0.35rem 0 0.2rem 0",
  padding: "0.3rem 0.75rem",
  textAlign: "center",
};
const tncRowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  fontSize: "0.97rem",
  margin: "0.1rem 0 0 0",
};

// Simple Eye Icons (SVG)
const EyeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
const EyeOffIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M1 1l22 22"></path>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path>
  </svg>
);

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState("login");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirm: "",
    tncChecked: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Show/Hide password toggle state
  const [showPassword, setShowPassword] = useState(false);

  // Forgot Password States
  const [forgotStep, setForgotStep] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotLoading, setForgotLoading] = useState(false);
  const [resetStep, setResetStep] = useState(false);
  const [resetFields, setResetFields] = useState({
    otp: "",
    password: "",
    confirm: "",
  });

  const overlayRef = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  function clearAllStates() {
    setFields({
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirm: "",
      tncChecked: true,
    });
    setLoading(false);
    setError("");
    setSuccess("");
    setForgotStep(false);
    setForgotEmail("");
    setForgotLoading(false);
    setResetStep(false);
    setResetFields({ otp: "", password: "", confirm: "" });
    setShowPassword(false);
  }

  // --- UPDATED: Direct Signup (No OTP) ---
  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (
      !fields.name ||
      !fields.email ||
      !fields.mobile ||
      !fields.password ||
      !fields.confirm
    ) {
      setError("All fields required.");
      return;
    }
    if (fields.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (fields.password !== fields.confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!fields.tncChecked) {
      setError("You must accept Terms & Conditions.");
      return;
    }

    setLoading(true);

    try {
      // 1. Check if user exists
      const getUserRes = await ddbDocClient.send(
        new GetCommand({ TableName: USERS_TABLE, Key: { email: fields.email } })
      );
      if (getUserRes.Item) {
        setLoading(false);
        setError("User already exists");
        return;
      }

      // 2. Hash Password
      const passwordHash = await bcrypt.hash(fields.password, 10);

      // 3. Create User Object (Status ACTIVE immediately)
      const userItem = {
        email: fields.email,
        name: fields.name,
        mobile: fields.mobile,
        passwordHash,
        status: "active", // Direct active status
        createdAt: new Date().toISOString(),
      };

      // 4. Save to DynamoDB
      await ddbDocClient.send(
        new PutCommand({
          TableName: USERS_TABLE,
          Item: userItem,
        })
      );

      setLoading(false);
      setSuccess("Registration successful! Logging you in...");

      // 5. Auto Login & Redirect
      const { passwordHash: ph, ...userProfile } = userItem;
      login(userProfile);

      setTimeout(() => {
        clearAllStates();
        onClose && onClose();
        navigate("/profile");
      }, 1000);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Registration failed. Network error.");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const getUserRes = await ddbDocClient.send(
        new GetCommand({ TableName: USERS_TABLE, Key: { email: fields.email } })
      );
      const user = getUserRes.Item;
      if (!user) {
        setLoading(false);
        setError("Account not found.");
        return;
      }
      // Since we removed OTP verify, some legacy users might be 'pending'.
      // You might want to allow them or force them to contact support.
      // For now, we assume if they exist, they can try to log in.

      const valid = await bcrypt.compare(fields.password, user.passwordHash);
      if (!valid) {
        setLoading(false);
        setError("Incorrect password.");
        return;
      }

      setLoading(false);
      setSuccess("Login successful!");
      const { passwordHash, otp, otpExpires, ...userProfile } = user;
      login(userProfile);
      setTimeout(() => {
        clearAllStates();
        onClose && onClose();
        navigate("/profile");
      }, 500);
    } catch (err) {
      setLoading(false);
      setError("Login failed. Network error.");
    }
  }

  // --- Forgot Password Logic (Kept Intact) ---
  async function handleForgotSubmit(e) {
    e.preventDefault();
    setError("");
    setForgotLoading(true);
    try {
      const getUserRes = await ddbDocClient.send(
        new GetCommand({ TableName: USERS_TABLE, Key: { email: forgotEmail } })
      );
      const user = getUserRes.Item;
      if (!user) {
        setForgotLoading(false);
        setError("Account not found");
        return;
      }
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      await ddbDocClient.send(
        new UpdateCommand({
          TableName: USERS_TABLE,
          Key: { email: forgotEmail },
          UpdateExpression: "SET otp = :otp, otpExpires = :exp",
          ExpressionAttributeValues: {
            ":otp": otp,
            ":exp": Date.now() + 10 * 60 * 1000,
          },
        })
      );
      await sendEmailSmtp({
        to: forgotEmail,
        subject: "JobPlanner Password Reset OTP",
        body: `Your password reset OTP is: ${otp}`,
      });
      setForgotLoading(false);
      setSuccess("OTP sent for password reset.");
      setResetStep(true);
    } catch (err) {
      setForgotLoading(false);
      setError("Failed to send OTP. Network error.");
    }
  }

  async function handleResetSubmit(e) {
    e.preventDefault();
    setError("");
    if (
      !resetFields.password ||
      !resetFields.confirm ||
      resetFields.password !== resetFields.confirm
    ) {
      setError("Passwords must match.");
      return;
    }
    setForgotLoading(true);
    try {
      const getUserRes = await ddbDocClient.send(
        new GetCommand({ TableName: USERS_TABLE, Key: { email: forgotEmail } })
      );
      const user = getUserRes.Item;
      if (!user) {
        setForgotLoading(false);
        setError("Account not found");
        return;
      }
      if (user.otp !== resetFields.otp || Date.now() > user.otpExpires) {
        setForgotLoading(false);
        setError("Invalid or expired OTP");
        return;
      }
      const passwordHash = await bcrypt.hash(resetFields.password, 10);
      await ddbDocClient.send(
        new UpdateCommand({
          TableName: USERS_TABLE,
          Key: { email: forgotEmail },
          UpdateExpression: "SET passwordHash = :hash REMOVE otp, otpExpires",
          ExpressionAttributeValues: { ":hash": passwordHash },
        })
      );
      setForgotLoading(false);
      setSuccess("Password reset successfully. You can now login.");
      setTimeout(() => {
        clearAllStates();
        setTab("login");
      }, 1400);
    } catch (err) {
      setForgotLoading(false);
      setError("Failed to reset password. Network error.");
    }
  }

  function handleTabSwitch(mode) {
    setTab(mode);
    clearAllStates();
  }

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose && onClose();
  }

  if (!open) return null;
  const tncLink = "/terms-and-conditions";

  return (
    <div style={overlayStyle} ref={overlayRef} onClick={handleOverlayClick}>
      <div style={modalStyle}>
        <button
          style={xBtnStyle}
          onClick={() => {
            clearAllStates();
            onClose && onClose();
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <div style={tabRow}>
          <button
            style={tabBtn(tab === "login")}
            onClick={() => handleTabSwitch("login")}
          >
            Login
          </button>
          <button
            style={tabBtn(tab === "signup")}
            onClick={() => handleTabSwitch("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Registration Form (Direct Signup) */}
        {tab === "signup" && (
          <form style={formStyle} onSubmit={handleRegister} autoComplete="off">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              style={standardInputStyle}
              value={fields.name}
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              style={standardInputStyle}
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              pattern="[0-9]{10,12}"
              maxLength={12}
              minLength={10}
              required
              style={standardInputStyle}
              value={fields.mobile}
              onChange={(e) =>
                setFields({
                  ...fields,
                  mobile: e.target.value.replace(/[^\d]/g, ""),
                })
              }
            />

            {/* Password Field with Show/Hide */}
            <div style={passwordWrapperStyle}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Create Password"
                style={inputStyle}
                value={fields.password}
                onChange={(e) =>
                  setFields({ ...fields, password: e.target.value })
                }
              />
              <button
                type="button"
                style={eyeBtnStyle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            {/* Confirm Password Field with Show/Hide */}
            <div style={passwordWrapperStyle}>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm"
                required
                placeholder="Confirm Password"
                style={inputStyle}
                value={fields.confirm}
                onChange={(e) =>
                  setFields({ ...fields, confirm: e.target.value })
                }
              />
              <button
                type="button"
                style={eyeBtnStyle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            <div style={tncRowStyle}>
              <input
                type="checkbox"
                id="tnc"
                checked={fields.tncChecked}
                onChange={(e) =>
                  setFields({ ...fields, tncChecked: e.target.checked })
                }
                style={{ marginRight: "0.7rem" }}
              />
              <label htmlFor="tnc">
                I agree to the{" "}
                <a
                  href={tncLink}
                  style={{ ...linkStyle, color: "#0070f3" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </label>
            </div>
            {error && <div style={errorStyle}>{error}</div>}
            {success && <div style={successStyle}>{success}</div>}
            <button type="submit" style={btnSubmit} disabled={loading}>
              {loading ? "Processing..." : "Sign Up"}
            </button>
          </form>
        )}

        {/* Login Form */}
        {tab === "login" && !forgotStep && (
          <form style={formStyle} onSubmit={handleLogin} autoComplete="off">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              style={standardInputStyle}
              value={fields.email}
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
            />
            <div style={passwordWrapperStyle}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                style={inputStyle}
                value={fields.password}
                onChange={(e) =>
                  setFields({ ...fields, password: e.target.value })
                }
              />
              <button
                type="button"
                style={eyeBtnStyle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {error && <div style={errorStyle}>{error}</div>}
            {success && <div style={successStyle}>{success}</div>}
            <button type="submit" style={btnSubmit} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}

        {/* Forgot Password - Email Step */}
        {tab === "login" && forgotStep && !resetStep && (
          <form
            style={formStyle}
            onSubmit={handleForgotSubmit}
            autoComplete="off"
          >
            <input
              type="email"
              name="forgotEmail"
              required
              placeholder="Registered Email"
              style={standardInputStyle}
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
            {error && <div style={errorStyle}>{error}</div>}
            {success && <div style={successStyle}>{success}</div>}
            <button type="submit" style={btnSubmit} disabled={forgotLoading}>
              {forgotLoading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* Forgot Password - OTP + New Password Step */}
        {tab === "login" && forgotStep && resetStep && (
          <form
            style={formStyle}
            onSubmit={handleResetSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              name="otp"
              required
              placeholder="Enter OTP"
              style={standardInputStyle}
              maxLength={6}
              value={resetFields.otp}
              onChange={(e) =>
                setResetFields({
                  ...resetFields,
                  otp: e.target.value.replace(/[^\d]/g, ""),
                })
              }
            />
            <div style={passwordWrapperStyle}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="New Password"
                style={inputStyle}
                value={resetFields.password}
                onChange={(e) =>
                  setResetFields({ ...resetFields, password: e.target.value })
                }
              />
              <button
                type="button"
                style={eyeBtnStyle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <div style={passwordWrapperStyle}>
              <input
                type={showPassword ? "text" : "password"}
                name="confirm"
                required
                placeholder="Confirm New Password"
                style={inputStyle}
                value={resetFields.confirm}
                onChange={(e) =>
                  setResetFields({ ...resetFields, confirm: e.target.value })
                }
              />
              <button
                type="button"
                style={eyeBtnStyle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {error && <div style={errorStyle}>{error}</div>}
            {success && <div style={successStyle}>{success}</div>}
            <button type="submit" style={btnSubmit} disabled={forgotLoading}>
              {forgotLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        {/* Bottom links */}
        {tab === "login" && !forgotStep && (
          <div style={bottomRow}>
            Not a member yet?&nbsp;
            <span style={linkStyle} onClick={() => handleTabSwitch("signup")}>
              Sign Up.
            </span>
            <br />
            <span
              style={{ ...linkStyle, marginTop: "0.37rem", color: "#2176f3" }}
              onClick={() => {
                clearAllStates();
                setForgotStep(true);
              }}
            >
              Forgot Password?
            </span>
          </div>
        )}
        {tab === "signup" && (
          <div style={bottomRow}>
            Already have an account?&nbsp;
            <span style={linkStyle} onClick={() => handleTabSwitch("login")}>
              Login here.
            </span>
          </div>
        )}
        {forgotStep && !resetStep && (
          <div style={bottomRow}>
            Remember your password?&nbsp;
            <span
              style={linkStyle}
              onClick={() => {
                clearAllStates();
                setTab("login");
              }}
            >
              Login
            </span>
          </div>
        )}
      </div>
    </div>
  );
}