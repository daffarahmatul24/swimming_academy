import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "Beranda", href: "#home" },
        { label: "Tentang", href: "#about" },
        { label: "Program", href: "#program" },
        { label: "Galeri", href: "#gallery" },
        // { label: "Testimoni", href: "#testimonial" },
        { label: "Kontak", href: "#contact" },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <h1
                            className={`text-2xl font-bold transition-colors ${isScrolled ? "text-[#0A2540]" : "text-white"}`}
                        >
                            Swim Academy
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={`transition-colors hover:text-cyan-500 ${
                                    isScrolled ? "text-gray-700" : "text-white"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all"
                        >
                            Daftar Sekarang
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className={`p-2 rounded-lg ${isScrolled ? "text-gray-700" : "text-white"}`}
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="block text-gray-700 hover:text-cyan-500 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "#contact")}
                            className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full"
                        >
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
