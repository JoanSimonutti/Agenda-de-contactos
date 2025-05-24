import React, { useState, useEffect } from "react";
import "../../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            className="scroll-to-top-btn"
            onClick={scrollToTop}
            title="Ir arriba"
            aria-label="Ir arriba"
            onMouseDown={(e) => e.currentTarget.classList.add("active")}
            onMouseUp={(e) => e.currentTarget.classList.remove("active")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("active")}
        >
            UP
        </button>
    );
};

export default ScrollToTopButton;