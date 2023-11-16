import { defineConfig } from "vitepress";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "禾白知识库",
  description: "零碎知识收集整理",
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        // You can also set options to adjust sidebar data
        // see option document below
        path: '/'
      })
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "前端", link: "/frontend/vite/vite" },
      { text: "后端 ", link: "/backend/" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hebaq/docsite" },
    ],
  },
});
