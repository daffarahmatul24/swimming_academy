// resources/js/Components/Testimonials.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ibu Sarah',
      role: 'Orang Tua Siswa',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'Anak saya sangat senang belajar renang di Aqua Swim Academy. Coach-nya sabar dan metode pengajarannya sangat menyenangkan. Dalam 2 bulan anak saya sudah bisa berenang dengan baik!',
    },
    {
      name: 'Budi Santoso',
      role: 'Siswa Dewasa',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
      text: 'Sebagai pemula di usia 30 tahun, saya awalnya ragu untuk belajar renang. Tapi Aqua Swim Academy membuat saya nyaman dan percaya diri. Sekarang renang sudah jadi hobi saya!',
    },
    {
      name: 'Ibu Rina',
      role: 'Orang Tua Siswa',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'Fasilitas kolam renangnya bersih dan aman. Jadwalnya juga fleksibel sesuai dengan aktivitas anak. Highly recommended untuk yang cari tempat les renang berkualitas!',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonial" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
            Testimoni
          </div>
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman siswa dan orang tua yang telah bergabung dengan kami
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white to-cyan-50 backdrop-blur-lg border border-cyan-100 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-cyan-200"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <div className="font-bold text-[#0A2540] text-xl">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-cyan-600">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all flex items-center justify-center"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 w-8'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg transition-all flex items-center justify-center"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
