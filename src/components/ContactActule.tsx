import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineCheck,
} from "react-icons/ai";

type ContactInfo = {
  phone: string;
  email: string;
  address: string;
  mapEmbedSrc: string;
};

type Projet = {
  titre: string;
  contact: ContactInfo;
};

type Props = {
  projet: Projet;
};

export default function ContactActule({ projet }: Props) {
  const { phone, email, address, mapEmbedSrc } = projet.contact;
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Erreur lors de la copie :", err);
    }
  };

  const contactItems = [
    {
      icon: AiOutlinePhone,
      label: "Téléphone",
      value: phone,
      href: `tel:${phone}`,
      field: "phone",
    },
    {
      icon: AiOutlineMail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      field: "email",
    },
    {
      icon: AiOutlineEnvironment,
      label: "Adresse",
      value: address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
      field: "address",
    },
  ];

  return (
    <section
  id="contact"
  className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#F5FCF8]"
>
      {/* Décor subtil en fond */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_60%)] pointer-events-none"></div>

      {/* Titre principal */}
      <div className="text-center mb-10 relative">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Coordonnées et Localisation
        </h1>
        <h2 className="text-2xl sm:text-3xl text-[#146C2D] font-semibold">
          {projet.titre}
        </h2>
        <div className="w-24 h-1 bg-[#146C2D] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Carte de contact */}
        <div className="bg-gradient-to-br bg-[#146C2D] to-indigo-700 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-between h-full hover:scale-[1.01] transition-transform duration-300">
          <div>
            <h3 className="text-2xl font-bold mb-4">Informations de Contact</h3>
            <div className="w-12 h-1 bg-white/70 rounded-full mb-6"></div>

            <ul className="space-y-6">
              {contactItems.map((item) => (
                <li key={item.field} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center group-hover:bg-white/25 transition">
                    <item.icon className="text-2xl text-white" />
                  </div>

                  <div className="flex-1">
                    <p className="font-semibold text-white text-lg mb-1">
                      {item.label}
                    </p>
                    {item.field !== "address" ? (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <a
                          href={item.href}
                          className="text-blue-100 hover:text-yellow-200 transition-colors duration-200 text-base truncate"
                        >
                          {item.value}
                        </a>
                        <button
                          onClick={() =>
                            copyToClipboard(item.value, item.field)
                          }
                          className="flex items-center gap-2 px-3 py-1 text-sm border border-white/30 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                          {copiedField === item.field ? (
                            <>
                              <AiOutlineCheck className="text-green-300" />
                              <span className="text-green-200">Copié</span>
                            </>
                          ) : (
                            "Copier"
                          )}
                        </button>
                      </div>
                    ) : (
                      <p className="text-blue-100 text-base">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-white/20 pt-4 text-sm text-blue-100/80">
            <p>
              Nous sommes disponibles du <strong>lundi au vendredi</strong> —
              contactez-nous pour toute demande d’information.
            </p>
          </div>
        </div>

        {/* Carte Google Map */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.01] transition-transform duration-300 h-full flex flex-col">
          <div className="p-8 pb-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Localisation
            </h3>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
            <p className="text-gray-800 text-base mb-2">{address}</p>
            <p className="text-sm text-gray-500">
              Cliquez sur la carte pour agrandir
            </p>
          </div>

          <div className="flex-1">
            <iframe
              title={`Localisation - ${projet.titre}`}
              src={mapEmbedSrc}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
