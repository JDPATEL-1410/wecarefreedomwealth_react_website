import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
    return (
        <motion.a
            href="https://wa.me/919377277703"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-[99999] group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact us on WhatsApp"
        >
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>

            {/* Main button */}
            <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300">
                <FaWhatsapp className="text-white text-3xl" />
            </div>

            {/* Tooltip */}
            <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                <span className="text-sm font-medium">Chat with us on WhatsApp</span>
                {/* Arrow */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-gray-900"></div>
            </div>
        </motion.a>
    );
};

export default WhatsAppFloat;
