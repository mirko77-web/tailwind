// tailwind.config.js
module.exports = {
    content: ["./index.html"],
    darkMode: "media", // Attiva la modalità scura automaticamente
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF",       // Blu intenso
          secondary: "#FACC15",     // Giallo acceso
          accent: "#F43F5E",        // Rosso vibrante
          backgroundLight: "#E5E7EB", // Sfondo chiaro
          backgroundDark: "#1E293B",  // Sfondo scuro
          textLight: "#1E293B",     // Testo per modalità chiara
          textDark: "#F3F4F6"       // Testo per modalità scura
        },
      },
    },
    plugins: [],
  };
  