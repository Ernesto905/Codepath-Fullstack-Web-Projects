import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(() => ({
  plugins: [
    react({
      include: ["./src/main.jsx"],
    }),
  ],
  server: {
    open: true,
    host: true,
  },
}))
