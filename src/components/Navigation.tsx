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
    { name: "Activités", href: "/Activites" },
    { name: "Réalisations", mega: true }, // mega dropdown
    { name: "Partenaires", href: "/Partenaires" },
    { name: "Documentation", href: "/Documentation" },
    { name: "Contact", href: "/Contact" },
  ];

  // Mega menu content
  const megaMenu = [
    {
      title: "L'environnement",
      items: [
        { name: "Cop 22", href: "/Realisations/environnement/cop22" },
        { name: "Progettomondo", href: "/Realisations/environnement/progettomondo" },
        { name: "Activités de Sensibilisation", href: "/Realisations/environnement/sensibilisation" },
      ],
    },
    {
      title: "Santé",
      items: [
        { name: "Convois médicaux", href: "/Realisations/sante/convois-médicaux" },
        { name: "Corona", href: "/Realisations/sante/corona" },
        { name: "Informations de la Santé", href: "/Realisations/sante/information" },
      ],
    },
    {
      title: "Domaine Social",
      items: [
        { name: "Journaliers", href: "/Realisations/social/journaliers" },
        { name: "Diagnostic Participatif", href: "/Realisations/social/diagnostic" },
        { name: "Convois de Solidarité", href: "/Realisations/social/convois-solidarité" },
      ],
    },
    {
      title: "Culture,Art et Patrimoine",
      items: [
        { name: "Festival d'Azilal", href: "/Realisations/culture-art/festival" },
        { name: "Gravures Rupestres", href: "/Realisations/culture-art/gravures" },
        { name: "EN Hommage aux Résistants", href: "/Realisations/culture-art/hommage" },
        { name: "Foire du livre", href: "/Realisations/culture-art/foire" },
      ],
    },
    {
      title: "Échange Culturel",
      items: [
        { name: "Barbados et Espagnols", href: "/Realisations/échange-culturel/barbados-espagnols" },
        { name: "Combattre L'extrémisme", href: "/Realisations/échange-culturel/extremisme" },
        { name: "Dialogueb Interreligieux", href: "/Realisations/échange-culturel/dialogueb-interreligieux" },
      ],
    },
    {
      title: "Autres",
      items: [
        { name: "BED", href: "/Realisations/autres/bed" },
        { name: "Unité National", href: "/Realisations/autres/unité-nationale" },
        { name: "Accueil des étudiants Africains", href: "/Realisations/autres/étudiants-africains" },
        { name: "Tourisme de Montagne", href: "/Realisations/autres/tourisme-montagne" },
      ],
    },
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50">
      <div className="w-full mx-auto">
        <div className="bg-white/60 backdrop-blur-md border border-[#000] shadow-md rounded-xl relative">
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="AADEC Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-10 relative">
              {navItems.map((item) =>
                item.mega ? (
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
                  setOpenSection(null); // close sections when menu toggled
                }}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-black" />
                ) : (
                  <Menu className="h-6 w-6 text-black" />
                )}
              </Button>
            </div>
          </div>

          {/* Mega Dropdown (Desktop) */}
          {isMegaOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg border-t border-gray-200 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 z-40 rounded-b-xl">
              {megaMenu.map((col) => (
                <div key={col.title}>
                  <h3 className="font-semibold text-[#146C2D] mb-3">
                    {col.title}
                  </h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-700 hover:text-[#146C2D] transition"
                        >
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
                item.mega ? (
                  <div key={item.name} className="border-t border-gray-200">
                    <button
                      className="w-full flex justify-between items-center px-3 py-3 font-medium text-black"
                      onClick={() =>
                        setOpenSection(
                          openSection === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSection === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Accordion style */}
                    {openSection === item.name && (
                      <div className="pl-4 py-2 animate-slideDown">
                        {megaMenu.map((col) => (
                          <div key={col.title} className="mb-3">
                            <h4 className="font-semibold text-[#146C2D]">
                              {col.title}
                            </h4>
                            {col.items.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.href}
                                className="block px-3 py-1 text-gray-700 hover:text-[#146C2D]"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </a>
                            ))}
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
    </nav>
  );
};

export default Navigation;
