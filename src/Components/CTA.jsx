// resources/js/Components/CTA.jsx
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Camera } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0A2540] via-[#1e3a5f] to-cyan-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Siap Mulai Belajar Renang?
                    </h2>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                        Bergabunglah dengan ratusan siswa yang telah merasakan
                        pengalaman belajar renang terbaik bersama kami
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://wa.me/6285804054076"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all text-lg font-semibold"
                        >
                            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Daftar via WhatsApp
                        </a>
                        {/* <a
                            href="https://instagram.com/aquaswimacademy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full hover:bg-white/20 transition-all text-lg font-semibold"
                        >
                            <Camera className="w-6 h-6" />
                            Follow Instagram
                        </a> */}
                    </div>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">
                                Gratis
                            </div>
                            <div className="text-white">Trial Class</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">
                                Fleksibel
                            </div>
                            <div className="text-white">Jadwal Kelas</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                            <div className="text-3xl font-bold text-cyan-400 mb-2">
                                Aman
                            </div>
                            <div className="text-white">& Menyenangkan</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
