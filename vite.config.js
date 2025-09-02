// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({

   base: '/travelmate-demo-website/', 
  plugins: [react()],
  
});
