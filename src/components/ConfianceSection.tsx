import React from "react";
import mountainView from "@/assets/greenbg.jpg";
import greenForest from "@/assets/greenbg.jpg";
import peacefulLake from "@/assets/greenbg.jpg";

const cards = [
    {
        title: "Mountain View",
        description:
            "Enjoy a peaceful retreat surrounded by the calm of mountain landscapes and fresh air.",
        image: mountainView,
    },
    {
        title: "Green Forest",
        description:
            "Walk through the deep green forests and reconnect with nature at its purest state.",
        image: greenForest,
    },
    {
        title: "Peaceful Lake",
        description:
            "Relax by the lake and enjoy the serene reflections and the sounds of water.",
        image: peacefulLake,
    },
];

const ConfianceSection = () => {
    return (
        <section className="bg-[#F5FCF8] py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#146C2D] uppercase tracking-wider relative">
                        POURQUOI NOUS CHOISIR ?
                        <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-20 h-1 bg-[#146C2D] rounded-full"></span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 justify-center py-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-md text-center p-6 max-w-sm mx-auto relative bg-cover bg-center"
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            {/* overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                            {/* circle image fo9 lcard */}
                            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* content */}
                            <div className="relative z-20 mt-24">
                                <h3 className="text-xl font-semibold mb-2 capitalize text-white">
                                    {card.title}
                                </h3>
                                <p className="text-base text-gray-200">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConfianceSection;
