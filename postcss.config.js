module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {}, // Enable nesting plugin before Tailwind
    tailwindcss: {},
    autoprefixer: {},
  },
};
