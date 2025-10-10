import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isMegaOpen, setIsMegaOpen] = useState(false); // mega dropdown desktop
  const [openSection, setOpenSection] = useState<string | null>(null); // mega dropdown mobile

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/Apropos" },
    {
      name: "Activites",
      dropdown: [
        { name: "Ecole Azicode-62", href: "/Activites/Azicode-62" },
        { name: "Ecole 2eme Chance", href: "/Activites/2eme-chance" },
        { name: "Reinsertion Prisonniers", href: "/Activites/reinsertion-prisonniers" },
        { name: "Centre Femmes", href: "/Activites/centre-femmes" },
      ],
    },
    { name: "Réalisations", mega: true }, // mega dropdown
    { name: "Partenaires", href: "/Partenaires" },
    { name: "Documentation", href: "/Documentation" },
    { name: "Contact", href: "/Contact" },
  ];

  const megaMenu = [
    {
      title: "L'environnement",
      items: [
        { name: "Cop 22", href: "/Realisations/environnement/cop22" },
        { name: "Progettomondo", href: "/Realisations/environnement/progettomondo" },
        { name: "Débats de Sensibilisation", href: "/Realisations/environnement/sensibilisation" },
      ],
    },

    {
      title: "Santé",
      items: [
        { name: "Convois médicaux", href: "/Realisations/sante/convois-medicaux" },
        { name: "Corona", href: "/Realisations/sante/corona" },
        { name: "Relais communautaire de santé", href: "/Realisations/sante/information" },
      ],
    },
    {
      title: "Domaine Social",
      items: [
        { name: "Ouvriers journaliers", href: "/Realisations/social/journalier" },
        { name: "Diagnostic Participatif", href: "/Realisations/social/diagnostic" },
        { name: "Convois de Solidarité", href: "/Realisations/social/convois-solidarite" },
      ],
    },
        {
      title: "Education",
      items: [
        { name: "Scolarisation des filles en milieu rural", href: "/Realisations/education/scolarisation" },
        { name: "étudiants cherchruts", href: "/Realisations/education/etudiants" },
        { name: "Professeurs d'université", href: "/Realisations/education/professeurs" },
        { name: "Modèle de Développement", href: "/Realisations/education/developpement" },
        { name: "Accueil des étudiants doctorants", href: "/Realisations/education/étudiants-africains" },
      ],
    },
    {
      title: "Culture,Art et Patrimoine",
      items: [
        { name: "Festival d'Azilal", href: "/Realisations/culture-art/festival" },
        { name: "Gravures Rupestres", href: "/Realisations/culture-art/gravures" },
        { name: "EN Hommage aux Résistants", href: "/Realisations/culture-art/hommage" },
        { name: "Restauration d'Ighrem", href: "/Realisations/culture-art/ighrem" },
        { name: "livre et Cinéma", href: "/Realisations/culture-art/livre-cinema" },
      ],
    },
    {
      title: "Échange Culturel",
      items: [
        { name: "Barbados et Espagnols", href: "/Realisations/échange-culturel/barbados-espagnols" },
        { name: "Combattre L'extrémisme", href: "/Realisations/échange-culturel/extremisme" },
        { name: "Dialogue inter-religieux", href: "/Realisations/échange-culturel/dialogueb-interreligieux" },
      ],
    },
    {
      title: "Autres",
      items: [
        { name: "BED", href: "/Realisations/autres/bed" },
        { name: "Pour le sahara marocain", href: "/Realisations/autres/unité-nationale" },
        { name: "Tourisme de Montagne", href: "/Realisations/autres/tourisme-montagne" },
        { name: "Pavage Tanaghmlt", href: "/Realisations/autres/pavage" },
      ],
    },
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50">
      <div className="w-full mx-auto">
        <div className="bg-white/60 backdrop-blur-md border border-[#000] shadow-md relative">
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src={logo}
                alt="AADEC Logo"
                className="h-10 md:h-12 w-auto max-w-full object-contain transition-transform hover:scale-105 duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-10 relative">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button className="flex items-center text-black font-medium hover:text-[#146C2D]">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {/* Simple Dropdown */}
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 min-w-max">
                      <ul className="py-2">
                        {item.dropdown.map((sub) => (
                          <li key={sub.name}>
                            <a
                              href={sub.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#146C2D]"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : item.mega ? (
                  <button
                    key={item.name}
                    className="flex items-center text-black font-medium hover:text-[#146C2D]"
                    onClick={() => setIsMegaOpen(!isMegaOpen)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-black font-medium hover:text-[#146C2D]"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setOpenSection(null);
                }}
                className="hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                {isOpen ? (
                  <X
                    className={`h-6 w-6 transition-transform duration-500 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    style={{ color: "#146C2D" }}
                  />
                ) : (
                  <Menu
                    className={`h-6 w-6 transition-transform duration-500 ${
                      isOpen ? "rotate-0" : "rotate-180"
                    }`}
                    style={{ color: "#146C2D" }}
                  />
                )}
              </Button>
            </div>
          </div>

          {/* Mega Dropdown (Desktop) */}
          {isMegaOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg border-t border-gray-200 p-8 grid grid-cols-1 md:grid-cols-4 gap-8 z-40 rounded-b-xl max-h-[70vh] overflow-y-auto animate-fadeSlide">
              {megaMenu.map((col) => (
                <div key={col.title} className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                  <h3 className="font-semibold text-[#146C2D] mb-3 border-b border-gray-200 pb-2">{col.title}</h3>
                  <ul className="space-y-2 mt-2">
                    {col.items.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="block text-gray-700 hover:text-[#146C2D] transition text-sm">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden px-4 pb-3 bg-white/95 backdrop-blur-md rounded-b-2xl border-t border-gray-200">
              {navItems.map((item) =>
                item.dropdown ? (
                  <details key={item.name} className="group border-t border-gray-200">
                    <summary className="flex items-center justify-between cursor-pointer px-3 py-3 font-medium text-black">
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 pl-4 space-y-2">
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.href}
                            className="block text-gray-700 hover:text-[#146C2D]"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : item.mega ? (
                  <div key={item.name} className="border-t border-gray-200">
                    <button
                      className="w-full flex justify-between items-center px-3 py-3 font-medium text-black"
                      onClick={() => setOpenSection(openSection === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSection === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openSection === item.name && (
                      <div className="pl-4 py-3 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto animate-fadeSlide">
                        {megaMenu.map((col) => (
                          <div key={col.title} className="bg-gray-50 p-3 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-[#146C2D] text-sm mb-2 border-b border-gray-200 pb-1">
                              {col.title}
                            </h4>
                            <ul className="space-y-1 mt-2">
                              {col.items.map((sub) => (
                                <li key={sub.name}>
                                  <a
                                    href={sub.href}
                                    className="block text-gray-700 hover:text-[#146C2D] text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {sub.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-3 text-black hover:text-[#146C2D] font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Animation Style */}
      <style >{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.4s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
