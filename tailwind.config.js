module.exports = {
  purge: [],
  important: true,
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        primary: "var(--primary)",
        "main-text": "var(--text-main)",
        "secondary-text": "var(--text-secondary)",
        "item-text": "var(--text-item)",
        accent: "var(--accent)",
      },
    },
  },
  variants: {},
  plugins: [],
};
