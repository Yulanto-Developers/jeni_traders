"use client";

import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/917639582802"
            target="_blank"
            rel="noopener noreferrer"
            className="position-fixed bottom-0 start-0 m-4 d-flex align-items-center justify-content-center rounded-circle bg-success text-white shadow"
            style={{ width: "56px", height: "56px", zIndex: 1050 }}
            title="Chat with us on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    );
};

export default FloatingWhatsApp;
