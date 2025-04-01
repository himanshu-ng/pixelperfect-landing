
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import animatePlugin from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ohwow: {
          black: "#121212",
          white: "#ffffff",
          "white-muted": "rgba(255, 255, 255, 0.7)",
          purple: "#5e17eb", // Primary
          "purple-light": "#7c42f5",
          lime: "#aaff00", // Secondary
        },
        purple: {
          DEFAULT: "#5e17eb",
          50: "#f6f3ff",
          100: "#ede9fe",
          200: "#dcd6fe",
          300: "#cabdfc",
          400: "#ac99f8",
          500: "#9172f3",
          600: "#7c42f5",
          700: "#6e30dd",
          800: "#5e17eb", // Primary color
          900: "#4c1bb0",
          950: "#2e0e70",
        },
        lime: {
          DEFAULT: "#aaff00",
          50: "#f7ffe5",
          100: "#ecffc5",
          200: "#deff91",
          300: "#caff52",
          400: "#aaff00", // Secondary color
          500: "#95e500",
          600: "#70b000",
          700: "#568700",
          800: "#466a0a",
          900: "#3b590d",
          950: "#1c320a",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5e17eb",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#aaff00",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" }
        },
        "bounce": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce": "bounce 1s infinite"
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;

export default config;
