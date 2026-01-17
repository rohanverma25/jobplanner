// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/",
//   server: {
//     historyApiFallback: true,
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify()],
  base: "/",
  server: {
    historyApiFallback: true,
  },
})