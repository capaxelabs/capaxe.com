import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

// Define color palette options
const colorPalettes = [
    {
        name: 'Default',
        primary: '217 89% 61%',
        accent: '187 100% 42%',
        secondary: '0 0% 96.1%',
        destructive: '0 84.2% 60.2%',
        primaryShades: {
            100: '217 89% 95%',
            200: '217 89% 85%',
            300: '217 89% 75%',
            400: '217 89% 65%',
            500: '217 89% 55%',
            600: '217 89% 45%',
            700: '217 89% 35%',
            800: '217 89% 25%',
        },
    },
    {
        name: 'Purple',
        primary: '270 95% 60%',
        accent: '300 100% 50%',
        secondary: '270 95% 96.1%',
        destructive: '0 84.2% 60.2%',
        primaryShades: {
            100: '270 95% 95%',
            200: '270 95% 85%',
            300: '270 95% 75%',
            400: '270 95% 65%',
            500: '270 95% 55%',
            600: '270 95% 45%',
            700: '270 95% 35%',
            800: '270 95% 25%',
        },
    },
    {
        name: 'Green',
        primary: '142 76% 36%',
        accent: '160 84% 39%',
        secondary: '142 76% 96.1%',
        destructive: '0 84.2% 60.2%',
        primaryShades: {
            100: '142 76% 95%',
            200: '142 76% 85%',
            300: '142 76% 75%',
            400: '142 76% 65%',
            500: '142 76% 55%',
            600: '142 76% 45%',
            700: '142 76% 35%',
            800: '142 76% 25%',
        },
    },
    {
        name: 'Orange',
        primary: '24 95% 53%',
        accent: '15 100% 50%',
        secondary: '24 95% 96.1%',
        destructive: '0 84.2% 60.2%',
        primaryShades: {
            100: '24 95% 95%',
            200: '24 95% 85%',
            300: '24 95% 75%',
            400: '24 95% 65%',
            500: '24 95% 55%',
            600: '24 95% 45%',
            700: '24 95% 35%',
            800: '24 95% 25%',
        },
    },
    {
        name: 'Red',
        primary: '0 84% 60%',
        accent: '0 100% 50%',
        secondary: '0 84% 96.1%',
        destructive: '0 84.2% 60.2%',
        primaryShades: {
            100: '0 84% 95%',
            200: '0 84% 85%',
            300: '0 84% 75%',
            400: '0 84% 65%',
            500: '0 84% 55%',
            600: '0 84% 45%',
            700: '0 84% 35%',
            800: '0 84% 25%',
        },
    },
];

const ColorPaletteSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePalette, setActivePalette] = useState('Default');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [popupPosition, setPopupPosition] = useState<'top' | 'bottom'>('bottom');

    // Handle click outside and position adjustment
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const adjustPosition = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const spaceAbove = rect.top;
                const spaceBelow = window.innerHeight - rect.bottom;
                const popupHeight = 200; // Approximate height of popup

                setPopupPosition(spaceAbove > popupHeight ? 'top' : 'bottom');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('resize', adjustPosition);
        adjustPosition();

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('resize', adjustPosition);
        };
    }, []);

    // Apply color palette to CSS variables
    const applyPalette = (palette: typeof colorPalettes[0]) => {
        const root = document.documentElement;

        // Update primary color and related variables
        root.style.setProperty('--primary', palette.primary);
        root.style.setProperty('--ring', palette.primary);
        root.style.setProperty('--chart-1', palette.primary);
        root.style.setProperty('--sidebar-primary', palette.primary);
        root.style.setProperty('--sidebar-ring', palette.primary);

        // Update accent color
        root.style.setProperty('--accent', palette.accent);
        root.style.setProperty('--chart-2', palette.accent);
        root.style.setProperty('--sidebar-accent', palette.accent);

        // Update secondary color
        root.style.setProperty('--secondary', palette.secondary);

        // Update destructive color
        root.style.setProperty('--destructive', palette.destructive);

        // Update primary shades
        Object.entries(palette.primaryShades).forEach(([shade, value]) => {
            root.style.setProperty(`--primary-${shade}`, value);
        });

        // Update color variables in the theme section
        root.style.setProperty('--color-primary', `hsl(${palette.primary})`);
        root.style.setProperty('--color-primary-100', `hsl(${palette.primaryShades[100]})`);
        root.style.setProperty('--color-primary-200', `hsl(${palette.primaryShades[200]})`);
        root.style.setProperty('--color-primary-300', `hsl(${palette.primaryShades[300]})`);
        root.style.setProperty('--color-primary-400', `hsl(${palette.primaryShades[400]})`);
        root.style.setProperty('--color-primary-500', `hsl(${palette.primaryShades[500]})`);
        root.style.setProperty('--color-primary-600', `hsl(${palette.primaryShades[600]})`);
        root.style.setProperty('--color-primary-700', `hsl(${palette.primaryShades[700]})`);
        root.style.setProperty('--color-primary-800', `hsl(${palette.primaryShades[800]})`);

        root.style.setProperty('--color-accent', `hsl(${palette.accent})`);
        root.style.setProperty('--color-secondary', `hsl(${palette.secondary})`);
        root.style.setProperty('--color-destructive', `hsl(${palette.destructive})`);

        // Save to localStorage
        localStorage.setItem('colorPalette', palette.name);
        setActivePalette(palette.name);
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('darkMode', newDarkMode ? 'true' : 'false');
    };

    // Load saved preferences on component mount
    useEffect(() => {
        // Load saved palette
        const savedPalette = localStorage.getItem('colorPalette');
        if (savedPalette) {
            const palette = colorPalettes.find(p => p.name === savedPalette);
            if (palette) {
                applyPalette(palette);
            }
        }

        // Load saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <div className="flex items-center gap-2 relative" ref={containerRef}>
            <div className="relative">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2"
                >
                    <span className="w-4 h-4 rounded-full" style={{ backgroundColor: `hsl(${activePalette === 'Default' ? '217 89% 61%' : colorPalettes.find(p => p.name === activePalette)?.primary || '217 89% 61%'})` }}></span>
                </Button>

                {isOpen && (
                    <div className={`absolute ${popupPosition === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'} -right-38 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-[100] border border-gray-200 dark:border-gray-700 overflow-visible transform translate-y-0`}>
                        <div className="py-1">
                            {colorPalettes.map((palette) => (
                                <button
                                    key={palette.name}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 ${activePalette === palette.name ? 'bg-gray-100 dark:bg-gray-700' : ''
                                        }`}
                                    onClick={() => {
                                        applyPalette(palette);
                                        setIsOpen(false);
                                    }}
                                >
                                    <span
                                        className="w-4 h-4 rounded-full"
                                        style={{ backgroundColor: `hsl(${palette.primary})` }}
                                    ></span>
                                    <span>{palette.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* <Button
                variant="outline"
                size="sm"
                onClick={toggleDarkMode}
                className="flex items-center gap-2"
            >
                {isDarkMode ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <span>Light</span>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <span>Dark</span>
                    </>
                )}
            </Button> */}
        </div>
    );
};

export default ColorPaletteSwitcher; 