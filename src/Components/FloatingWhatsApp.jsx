// resources/js/Components/FloatingWhatsApp.jsx
import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/6285804054076"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
                delay: 1,
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
                <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl">
                    <MessageCircle className="w-8 h-8" />
                </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
                1
            </div>
        </motion.a>
    );
}
