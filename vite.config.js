import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // eslint-disable-next no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
