import React from "react";
import { motion } from "framer-motion";
import { Baby, User, Users } from "lucide-react";

export default function Programs() {
    const programs = [
        {
            icon: Baby,
            title: "Kelas Anak",
            age: "4-12 Tahun",
            description:
                "Program khusus anak dengan pendekatan fun learning yang menyenangkan dan aman",
            features: [
                "Instruktur ramah anak",
                "Metode bermain sambil belajar",
                "Peralatan khusus anak",
                "Progress perkembangan anak terpantau dengan baik",
            ],
            gradient: "from-pink-500 to-rose-500",
        },
        {
            icon: User,
            title: "Kelas Dewasa",
            age: "13+ Tahun",
            description:
                "Pelatihan renang untuk dewasa dengan fokus teknik dan stamina yang tepat",
            features: [
                "Teknik renang profesional",
                "Latihan stamina",
                "Jadwal fleksibel",
                "Progress tracking",
            ],
            gradient: "from-cyan-500 to-blue-600",
        },
        {
            icon: Users,
            title: "Private Class",
            age: "Semua Usia",
            description:
                "Sesi privat one-on-one dengan coach untuk pembelajaran lebih intensif",
            features: [
                "Perhatian penuh coach",
                "Jadwal custom",
                "Program personalized",
                "Hasil lebih cepat",
            ],
            gradient: "from-purple-500 to-indigo-600",
        },
    ];

    return (
        <section
            id="program"
            className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
                        Program Kami
                    </div>
                    <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
                        Pilih Program yang Sesuai
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami menyediakan berbagai program pelatihan renang yang
                        disesuaikan dengan kebutuhan dan usia Anda
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div
                                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${program.gradient} mb-6 group-hover:scale-110 transition-transform`}
                            >
                                <program.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                                {program.title}
                            </h3>
                            <div className="text-cyan-600 font-semibold mb-4">
                                {program.age}
                            </div>
                            <p className="text-gray-600 mb-6">
                                {program.description}
                            </p>
                            <ul className="space-y-3">
                                {program.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-2 text-gray-700"
                                    >
                                        <div
                                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            {/* <button
                                className={`mt-8 w-full py-3 rounded-xl bg-gradient-to-r ${program.gradient} text-white font-semibold hover:shadow-lg transition-all`}
                            >
                                Pilih Program
                            </button> */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
