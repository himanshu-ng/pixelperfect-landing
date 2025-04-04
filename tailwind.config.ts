
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
          "black-lighter": "#1a1a1a",
          white: "#ffffff",
          "white-muted": "rgba(255, 255, 255, 0.7)",
          purple: "#5e17eb", // Primary
          "purple-light": "#7c42f5",
          "purple-dark": "#4812c0",
          lime: "#aaff00", // Secondary
          "lime-light": "#c1ff4d",
          "lime-dark": "#88cc00",
          gray: {
            100: "rgba(255, 255, 255, 0.05)",
            200: "rgba(255, 255, 255, 0.1)",
            300: "rgba(255, 255, 255, 0.15)",
            400: "rgba(255, 255, 255, 0.2)",
          },
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
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.ohwow.purple.500), 0 0 20px theme(colors.ohwow.purple.800)',
        'neon-lime': '0 0 5px theme(colors.ohwow.lime.300), 0 0 20px theme(colors.ohwow.lime.500)',
        'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
        'card': '0 0 1px rgba(255, 255, 255, 0.1), 0 4px 20px rgba(0, 0, 0, 0.35)',
        'button': '0 4px 14px rgba(94, 23, 235, 0.4)',
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
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
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
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          }
        },
        "glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(170, 255, 0, 0.5), 0 0 10px rgba(94, 23, 235, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 15px rgba(170, 255, 0, 0.7), 0 0 20px rgba(94, 23, 235, 0.5)",
          }
        },
        "scale": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" }
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "slide-up": {
          "0%": { 
            transform: "translateY(20px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "slide-down": {
          "0%": { 
            transform: "translateY(-20px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "slide-left": {
          "0%": { 
            transform: "translateX(20px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateX(0)",
            opacity: "1"
          }
        },
        "slide-right": {
          "0%": { 
            transform: "translateX(-20px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateX(0)",
            opacity: "1"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce": "bounce 1s infinite",
        "float": "float 5s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "scale": "scale 0.3s ease-out forwards",
        "rotate-slow": "rotate-slow 8s linear infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out forwards",
        "slide-left": "slide-left 0.5s ease-out forwards",
        "slide-right": "slide-right 0.5s ease-out forwards"
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;

export default config;
