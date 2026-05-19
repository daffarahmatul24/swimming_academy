// resources/js/Components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, PlayCircle } from "lucide-react";

export default function Hero() {
    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen pt-28 md:pt-32 flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1920&q=80"
                    alt="Swimming Pool"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540]/90 via-[#1e3a5f]/85 to-cyan-900/80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Belajar Renang Aman &<br />
                        Menyenangkan Bersama
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Coach Profesional
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Program les renang terpercaya dengan metode fun learning
                        untuk segala usia
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all"
                        >
                            <MessageCircle className="group-hover:rotate-12 transition-transform" />
                            Hubungi via WhatsApp
                        </a>
                        <a
                            href="#program"
                            onClick={(e) => scrollToSection(e, "#program")}
                            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all"
                        >
                            <PlayCircle />
                            Lihat Program
                        </a>
                    </div>
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                            5+
                        </div>
                        <div className="text-white">Tahun Pengalaman</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                            500+
                        </div>
                        <div className="text-white">Siswa Aktif</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">
                            98%
                        </div>
                        <div className="text-white">Kepuasan Siswa</div>
                    </div>
                </motion.div> */}
            </div>

            {/* <div className="absolute bottom-0 left-0 right-0 text-white">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-16 md:h-24"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill="white"
                    />
                </svg>
            </div> */}
        </section>
    );
}
