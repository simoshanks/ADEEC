import { useState, useEffect } from "react";
import { carouselItems } from "../data/db.js"; // استيراد البيانات من db.js


const Carousel = () => {
  const items = carouselItems; // هنا رجعنا array من db.js
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
    <div className="w-full bg-[#F8F8F8] flex justify-center " style={{marginTop:"-100px"}}>
      <div className="relative w-full max-w-6xl flex justify-center items-center space-x-4">
        <div className="w-1/4 opacity-70 scale-90 translate-y-4 transition-all duration-700">
          <Card item={items[prevIndex]} />
        </div>

        <div className="w-1/3 scale-95 -translate-y-4 z-10 transition-all duration-700">
          <Card item={items[current]} big />
        </div>

        <div className="w-1/4 opacity-70 scale-90 translate-y-4 transition-all duration-700">
          <Card item={items[nextIndex]} />
        </div>
      </div>
    </div>
  );
};

const Card = ({ item, big }: { item: { title: string; image: string }, big?: boolean }) => (
  <div className={`relative rounded-xl overflow-hidden bg-white ${big ? "h-64" : "h-56"} flex flex-col shadow-lg`}>
    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
    <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-white text-sm font-medium">
      {item.title}
    </div>
  </div>
);

export default Carousel; 