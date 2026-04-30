import { useState, useEffect } from "react";

const BackgroundCarousel = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover"
          />
          {/* Overlay oscuro para que el texto sea legible */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundCarousel;