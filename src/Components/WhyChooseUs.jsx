import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Shield, Clock, Heart } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: GraduationCap,
            title: "Coach Profesional",
            description:
                "Instruktur dengan pengalaman mengajar lebih dari 5 tahun",
        },
        {
            icon: Shield,
            title: "Kolam Aman",
            description:
                "Fasilitas kolam renang berstandar internasional dengan sistem keamanan terbaik",
        },
        {
            icon: Clock,
            title: "Jadwal Fleksibel",
            description:
                "Pilihan jadwal yang dapat disesuaikan dengan aktivitas Anda",
        },
        {
            icon: Heart,
            title: "Metode Fun Learning",
            description:
                "Pembelajaran yang menyenangkan dengan pendekatan ramah dan supportif",
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
                        Keunggulan Kami
                    </div>
                    <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
                        Mengapa Memilih Swim Academy?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami berkomitmen memberikan pengalaman belajar renang
                        terbaik dengan fasilitas dan instruktur berkualitas
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group text-center"
                        >
                            <div className="relative inline-flex mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
