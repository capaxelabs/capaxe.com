import React from 'react';
import ColorPaletteSwitcher from '@/components/ColorPaletteSwitcher';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="navbar-glass py-4 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-primary">Color Palette Demo</h1>
                    <ColorPaletteSwitcher />
                </div>
            </header>

            <main className="container mx-auto py-12 px-6">
                <section className="mb-12">
                    <h2 className="section-title">Theme Colors</h2>
                    <p className="section-subtitle">These elements use the theme colors that change with the palette switcher</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Primary Colors */}
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-lg font-bold mb-4">Primary Colors</h3>
                            <div className="space-y-2">
                                <div className="h-10 rounded bg-primary text-primary-foreground flex items-center justify-center">Primary</div>
                                <div className="h-10 rounded bg-primary-100 text-primary-800 flex items-center justify-center">Primary 100</div>
                                <div className="h-10 rounded bg-primary-200 text-primary-800 flex items-center justify-center">Primary 200</div>
                                <div className="h-10 rounded bg-primary-300 text-primary-800 flex items-center justify-center">Primary 300</div>
                                <div className="h-10 rounded bg-primary-400 text-primary-foreground flex items-center justify-center">Primary 400</div>
                                <div className="h-10 rounded bg-primary-500 text-primary-foreground flex items-center justify-center">Primary 500</div>
                                <div className="h-10 rounded bg-primary-600 text-primary-foreground flex items-center justify-center">Primary 600</div>
                                <div className="h-10 rounded bg-primary-700 text-primary-foreground flex items-center justify-center">Primary 700</div>
                                <div className="h-10 rounded bg-primary-800 text-primary-foreground flex items-center justify-center">Primary 800</div>
                            </div>
                        </div>

                        {/* Secondary Colors */}
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-lg font-bold mb-4">Secondary Colors</h3>
                            <div className="space-y-2">
                                <div className="h-10 rounded bg-secondary text-secondary-foreground flex items-center justify-center">Secondary</div>
                                <div className="h-10 rounded bg-muted text-muted-foreground flex items-center justify-center">Muted</div>
                            </div>
                        </div>

                        {/* Accent Colors */}
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-lg font-bold mb-4">Accent Colors</h3>
                            <div className="space-y-2">
                                <div className="h-10 rounded bg-accent text-accent-foreground flex items-center justify-center">Accent</div>
                            </div>
                        </div>

                        {/* Destructive Colors */}
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-lg font-bold mb-4">Destructive Colors</h3>
                            <div className="space-y-2">
                                <div className="h-10 rounded bg-destructive text-destructive-foreground flex items-center justify-center">Destructive</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="section-title">UI Components</h2>
                    <p className="section-subtitle">These components use the theme colors</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-lg font-bold mb-4">Buttons</h3>
                            <div className="flex flex-wrap gap-2">
                                <Button variant="default">Default</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="destructive">Destructive</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="link">Link</Button>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg border border-border">
                            <h3 className="text-lg font-bold mb-4">Text Styles</h3>
                            <div className="space-y-2">
                                <p className="text-primary">Primary Text</p>
                                <p className="text-secondary">Secondary Text</p>
                                <p className="text-accent">Accent Text</p>
                                <p className="text-destructive">Destructive Text</p>
                                <p className="text-muted-foreground">Muted Text</p>
                                <p className="text-gradient">Gradient Text</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="section-title">Chart Colors</h2>
                    <p className="section-subtitle">These colors are used for charts and data visualization</p>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div className="h-20 rounded bg-[hsl(var(--chart-1))] flex items-center justify-center text-white">Chart 1</div>
                        <div className="h-20 rounded bg-[hsl(var(--chart-2))] flex items-center justify-center text-white">Chart 2</div>
                        <div className="h-20 rounded bg-[hsl(var(--chart-3))] flex items-center justify-center text-white">Chart 3</div>
                        <div className="h-20 rounded bg-[hsl(var(--chart-4))] flex items-center justify-center text-white">Chart 4</div>
                        <div className="h-20 rounded bg-[hsl(var(--chart-5))] flex items-center justify-center text-white">Chart 5</div>
                    </div>
                </section>
            </main>
        </div>
    );
} 