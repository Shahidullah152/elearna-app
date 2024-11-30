/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-colo-1": "#0f252a",
        "main-colo-2": "#ffb606",
        "main-colo-3": "#eff6f8",
      },
      backgroundImage: {
        "hero-bg": 'url("./src/assets/images/Home1/hero-bg.avif")',
        "category-girl": "url(./src/assets/images/Home1/category-girl.webp)",
        "footer-bg": "url(./src/assets/images/Home1/footer-bg.avif)",
        "about-bg": "url(./src/assets/images/Home1/about-bg.webp)",
        "about2-bg": "url(./src/assets/images/Home2/about-5.webp)",
        "FAQ-bg": "url(./src/assets/images/Home1/FAQ-bg.webp)",
        "pricing-bg": "url(./src/assets/images/Home2/pricing-bg.webp)",
        "event-bg": "url(./src/assets/images/Home1/event-bg.webp)",
        "team-bg": "url(./src/assets/images/Home1/team-bg.webp)",
        "blog-bg": "url(./src/assets/images/Home1/blog-bg.webp)",
        "contact-bg": "url(./src/assets/images/Home1/contact-bg.webp)",
      },
      animation: {
        card: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
