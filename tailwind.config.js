/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff',
        'secondary': '#6c757d',
        'accent': '#ffc107',
        'background': '#f8f9fa',
        'foreground': '#343a40',
        'muted': '#6c757d',
        'muted-foreground': '#adb5bd',
        'border': '#dee2e6',
        'card': '#ffffff',
        'card-foreground': '#212529',
        'popover': '#ffffff',
        'popover-foreground': '#212529',
        'destructive': '#dc3545',
        'destructive-foreground': '#ffffff',
        'success': '#28a745',
        'info': '#17a2b8',
        'warning': '#ffc107',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
