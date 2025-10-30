import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        primary: {
                                dark: '#0f172a',
                                slate: '#1e293b',
                                blue: '#06b6d4',
                                purple: '#8b5cf6',
                                yellow: '#fbbf24',
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        text: {
                                primary: '#f8fafc',
                                secondary: '#cbd5e1',
                                tertiary: '#94a3b8'
                        },
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        }
                },
                fontFamily: {
                        sans: [
                                'Inter',
                                'Geist Sans',
                                'system-ui',
                                'sans-serif'
                        ],
                        mono: [
                                'JetBrains Mono',
                                'monospace'
                        ]
                },
                spacing: {
                        '1': '0.25rem',
                        '2': '0.5rem',
                        '3': '0.75rem',
                        '4': '1rem',
                        '6': '1.5rem',
                        '8': '2rem',
                        '10': '2.5rem',
                        '12': '3rem',
                        '16': '4rem',
                        '20': '5rem',
                        '24': '6rem',
                },
                fontSize: {
                        'xs': '0.75rem',
                        'sm': '0.875rem',
                        'base': '1rem',
                        'lg': '1.125rem',
                        'xl': '1.25rem',
                        '2xl': '1.5rem',
                        '3xl': '1.875rem',
                        '4xl': '2.25rem',
                        '5xl': '3rem',
                        '6xl': '3.75rem',
                        '7xl': '4.5rem',
                },
                lineHeight: {
                        'tight': '1.25',
                        'normal': '1.5',
                        'relaxed': '1.75',
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                keyframes: {
                        'accordion-down': {
                                from: {
                                        height: '0'
                                },
                                to: {
                                        height: 'var(--radix-accordion-content-height)'
                                }
                        },
                        'accordion-up': {
                                from: {
                                        height: 'var(--radix-accordion-content-height)'
                                },
                                to: {
                                        height: '0'
                                }
                        },
                        'fade-in': {
                                from: {
                                        opacity: '0'
                                },
                                to: {
                                        opacity: '1'
                                }
                        },
                        'fade-in-up': {
                                from: {
                                        opacity: '0',
                                        transform: 'translateY(20px)'
                                },
                                to: {
                                        opacity: '1',
                                        transform: 'translateY(0)'
                                }
                        },
                        'fade-in-down': {
                                from: {
                                        opacity: '0',
                                        transform: 'translateY(-20px)'
                                },
                                to: {
                                        opacity: '1',
                                        transform: 'translateY(0)'
                                }
                        },
                        'slide-in-right': {
                                from: {
                                        transform: 'translateX(-100%)'
                                },
                                to: {
                                        transform: 'translateX(0)'
                                }
                        },
                        'slide-in-left': {
                                from: {
                                        transform: 'translateX(100%)'
                                },
                                to: {
                                        transform: 'translateX(0)'
                                }
                        },
                        'scale-in': {
                                from: {
                                        opacity: '0',
                                        transform: 'scale(0.9)'
                                },
                                to: {
                                        opacity: '1',
                                        transform: 'scale(1)'
                                }
                        },
                        'shimmer': {
                                '0%': {
                                        backgroundPosition: '-200% 0'
                                },
                                '100%': {
                                        backgroundPosition: '200% 0'
                                }
                        },
                        'pulse-glow': {
                                '0%, 100%': {
                                        opacity: '1'
                                },
                                '50%': {
                                        opacity: '0.5'
                                }
                        },
                        'bounce-in': {
                                '0%': {
                                        transform: 'scale(0.3)',
                                        opacity: '0'
                                },
                                '50%': {
                                        transform: 'scale(1.05)'
                                },
                                '70%': {
                                        transform: 'scale(0.9)'
                                },
                                '100%': {
                                        transform: 'scale(1)',
                                        opacity: '1'
                                }
                        },
                        'float': {
                                '0%, 100%': {
                                        transform: 'translateY(0px)'
                                },
                                '50%': {
                                        transform: 'translateY(-10px)'
                                }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'fade-in': 'fade-in 0.5s ease-out',
                        'fade-in-up': 'fade-in-up 0.6s ease-out',
                        'fade-in-down': 'fade-in-down 0.6s ease-out',
                        'slide-in-right': 'slide-in-right 0.5s ease-out',
                        'slide-in-left': 'slide-in-left 0.5s ease-out',
                        'scale-in': 'scale-in 0.4s ease-out',
                        'shimmer': 'shimmer 2s linear infinite',
                        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        'float': 'float 3s ease-in-out infinite'
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
