// tailwind.config.js
module.exports = {
    content: ["./index.html"],
    darkMode: "media", // Attiva la dark mode automaticamente
    theme: {
      extend: {
        colors: {
          lightBg: "#F3F4F6",  // Sfondo chiaro
          darkBg: "#1E293B",   // Sfondo scuro
          lightText: "#1E293B", // Testo scuro in modalità chiara
          darkText: "#F3F4F6",  // Testo chiaro in modalità scura
          primary: "#1E40AF",  // Blu per titoli
          secondary: "#FACC15" // Giallo per evidenziazioni
        },
      },
    },
    plugins: [],
  };
  