import React from 'react';
import { motion } from "framer-motion";
import Masonry from 'react-responsive-masonry';

export default function Gallery() {
  const images = [
    'images/galery1.jpeg',
    'images/galery2.jpeg',
    'images/galery3.jpeg',
    'images/galery4.jpeg',
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-4">
            Galeri
          </div>
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Momen Kegiatan Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat suasana belajar yang menyenangkan dan profesional di Swim Academy
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="1rem">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold">Swim Academy</p>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
}
