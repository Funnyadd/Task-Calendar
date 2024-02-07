module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'inverted-text' : 'var(--inverted-text)',
        'background': 'var(--bg)',
        'bacground-contrast': 'var(--bgcontrast)',
        'secondary-background': 'var(--static11)',
        'third-background': 'var(--static8)',
        'inverted-background': 'var(--inverted-background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
      },  
    },
  }, 
  plugins: [],
};
