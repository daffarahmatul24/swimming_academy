// resources/js/Components/About.jsx
import React from 'react';
import { motion } from "framer-motion";
import { Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80"
                alt="Professional Coach"
                className="rounded-3xl shadow-2xl"
              />
              {/* <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Tahun Berpengalaman</div>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
              Tentang Kami
            </div>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
              Akademi Renang Terpercaya di Indonesia
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Aqua Swim Academy adalah lembaga pelatihan renang profesional dengan pengalaman lebih dari 5 tahun.
              Kami berkomitmen memberikan pengajaran berkualitas dengan metode fun learning yang aman dan efektif
              untuk segala usia.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Didukung oleh tim coach berpengalaman dan fasilitas kolam renang berstandar internasional,
              kami telah melatih ratusan siswa mencapai tujuan mereka dalam berenang.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <Award className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
                <div className="font-bold text-[#0A2540]">Berpengalaman</div>
                <div className="text-sm text-gray-600">Coach Profesional</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <Users className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
                <div className="font-bold text-[#0A2540]">500+</div>
                <div className="text-sm text-gray-600">Siswa Terlatih</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                <Target className="w-10 h-10 text-cyan-600 mx-auto mb-3" />
                <div className="font-bold text-[#0A2540]">Metode</div>
                <div className="text-sm text-gray-600">Fun Learning</div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
