// resources/js/Components/Footer.jsx
import React from "react";
import { MapPin, Phone, Mail, Globe, Camera } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0A2540] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Aqua Swim Academy
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Akademi renang profesional dengan metode fun
                            learning untuk segala usia
                        </p>
                        {/* <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all"
                            >
                                <Globe className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all"
                            >
                                <Camera className="w-5 h-5" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-all"
                            >
                                <Camera className="w-5 h-5" />
                            </a>
                        </div> */}
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Program</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <a
                                    href="#program"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Kelas Anak
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#program"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Kelas Dewasa
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#program"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Private Class
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Kontak</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <span>
                                    Jl. Wisma indah 2 k6/20, Surabaya Timur
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                <a
                                    href="tel:+6285804054076"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    +62 858-0405-4076
                                </a>
                            </li>
                            {/* <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                <a
                                    href="mailto:info@aquaswimacademy.com"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    info@aquaswimacademy.com
                                </a>
                            </li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Lokasi Kami</h4>
                        <div className="rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3957.15710615879!2d112.812163!3d-7.336246999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjAnMTAuNSJTIDExMsKwNDgnNDMuOCJF!5e0!3m2!1sen!2sid!4v1779164197467!5m2!1sen!2sid/maps/embed?https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3957.1620854325834!2d112.81217700000002!3d-7.335687!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjAnMTAuNSJTIDExMsKwNDgnNDMuOCJF!5e0!3m2!1sen!2sid!4v1779164055048!5m2!1sen!2sidhttps://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3957.1620854325834!2d112.81217700000002!3d-7.335687!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjAnMTAuNSJTIDExMsKwNDgnNDMuOCJF!5e0!3m2!1sen!2sid!4v1779164055048!5m2!1sen!2sid=!1m17!1m12!1m3!1d574.938738490322!2d112.81217723488653!3d-7.335686548728623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjAnMTAuNSJTIDExMsKwNDgnNDMuOCJF!5e0!3m2!1sen!2sid!4v1779163824863!5m2!1sen!2sid"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Swim Academy. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
