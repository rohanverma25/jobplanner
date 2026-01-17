# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Client-side SMTP (Auth emails)

This project currently sends authentication emails (OTP, welcome, password reset) directly from the browser using `smtpjs` (loaded from `https://smtpjs.com/v3/smtp.js`).

- Location: `src/components/AuthModal.jsx`.
- Why: You asked for a frontend-only solution. Browsers cannot open raw SMTP/TLS sockets, so `smtpjs` acts as a client-side relay.
- Security: SMTP credentials are stored in `AuthModal.jsx` as placeholders. This exposes them publicly — it is insecure. The recommended approach remains moving email sending to the backend.

To configure Hostinger SMTP:
1. Open `src/components/AuthModal.jsx`.
2. Replace the placeholders `SMTP_HOST`, `SMTP_USERNAME`, and `SMTP_PASSWORD` with your Hostinger details.
3. Run the frontend dev server and test registration / forgot flows. The library will load `smtp.js` dynamically in the browser.

If emails fail to deliver, please consider switching to a server-side SMTP implementation (recommended) or use a dedicated email API service (EmailJS, SendGrid, etc.).
