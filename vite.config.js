import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve,dirname} from 'path';  // 'resolve' absolute path banane ke liye aur 'dirname' current directory ka rasta maloom karne ke liye import kiye gaye hain.
import { fileURLToPath } from 'url'; // Current file ka URL lo aur usay normal path mein badlo, is ke liye yse hota hai fileURLToPath
import tailwindcss from '@tailwindcss/vite';
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
    alias:{ // yahan pr file paths ke liye kaam kiya hai, ke hamain lambe lambe file paths likhne ki zaroorat na parre or ghalti bhi kam se kam ho paths likhne main
 
      // Alias: ----------------> simple ------> Lambe path ko ek chota naam dena
      // Programming mein, khas tor par React aur Vite mein, hum kisi lambe aur moshkil File Path ko ek chota aur asaan naam de dete hain, usay Alias kehte hain.
      "#components": resolve(__dirname, "src/components"),
      "#constants": resolve(__dirname, "src/constants"),
      "#store": resolve(__dirname, "src/store"),
      "#hoc": resolve(__dirname, "src/hoc"),
      "#windows": resolve(__dirname, "src/windows")
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
})
