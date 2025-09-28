import { useState, useEffect } from "react";
import { carouselItems } from "../data/db.js";

const Carousel = () => {
  const items = carouselItems;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [items.length]);

  const prevIndex = (current - 1 + items.length) % items.length;
  const nextIndex = (current + 1) % items.length;

  return (
    <div
      className="w-full bg-gradient-to-b from-[#f8f8f8] to-[#ffffff] flex flex-col items-center pt-10 md:pt-16"
    >
      <div className="relative w-full max-w-6xl flex justify-center items-center space-x-4">
        {/* Previous */}
        <div className="w-1/4 opacity-60 scale-90 translate-y-4 transition-all duration-700">
          <Card item={items[prevIndex]} />
        </div>

        {/* Current */}
        <div className="w-1/3 scale-95 -translate-y-4 z-10 transition-all duration-700">
          <Card item={items[current]} big />
        </div>

        {/* Next */}
        <div className="w-1/4 opacity-60 scale-90 translate-y-4 transition-all duration-700">
          <Card item={items[nextIndex]} />
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === current ? "bg-[#146C2D] w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  item,
  big,
}: {
  item: { title: string; image: string };
  big?: boolean;
}) => (
  <div
    className={`relative rounded-2xl overflow-hidden shadow-lg ${
      big ? "h-72 md:h-80" : "h-56 md:h-64"
    }`}
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
    <div className="absolute bottom-4 left-4 right-4 text-white">
      <h3
        className={`font-semibold ${
          big ? "text-lg md:text-xl" : "text-sm md:text-base"
        }`}
      >
        {item.title}
      </h3>
    </div>
  </div>
);

export default Carousel;
