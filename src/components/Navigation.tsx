import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Home, Users, Activity, Trophy, Handshake, FileText, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const throttledScroll = throttle(handleScroll, 10);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setOpenSection(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "À propos", href: "/Apropos", icon: Users },
    {
      name: "Actuelles",
      dropdown: [
        { name: "Ecole Azicode-62", href: "/Activites/Azicode-62" },
        { name: "Ecole 2eme Chance", href: "/Activites/2eme-chance" },
        { name: "Reinsertion Prisonniers", href: "/Activites/reinsertion-prisonniers" },
        { name: "Centre Femmes", href: "/Activites/centre-femmes" },
      ],
      icon: Activity
    },
    { name: "Réalisations", mega: true, icon: Trophy },
    { name: "Partenaires", href: "/Partenaires", icon: Handshake },
    { name: "Documentation", href: "/Documentation", icon: FileText },
    { name: "Contact", href: "/Contact", icon: Phone },
  ];

  const megaMenu = [
    {
      title: "L'environnement",
      items: [
        { name: "Cop 22", href: "/Realisations/environnement/cop22" },
        { name: "Progetto Mondo", href: "/Realisations/environnement/progettomondo" },
        { name: "Débats de Sensibilisation", href: "/Realisations/environnement/sensibilisation" },
      ],
    },
    {
      title: "Santé",
      items: [
        { name: "Compagnes Médicales", href: "/Realisations/sante/campagnes-medicales" },
        { name: "Corona", href: "/Realisations/sante/corona" },
        { name: "Relais communautaire de santé", href: "/Realisations/sante/information" },
      ],
    },
    {
      title: "Caritatif et Domaine Social",
      items: [
        { name: "Ouvriers journaliers", href: "/Realisations/social/journalier" },
        { name: "Diagnostic Territoriaux", href: "/Realisations/social/diagnostic" },
        { name: "Caravanes de Solidarité", href: "/Realisations/social/caravanes-solidarite" },
      ],
    },
    {
      title: "Education",
      items: [
        { name: "Scolarisation des filles en milieu rural", href: "/Realisations/education/scolarisation" },
        { name: "Collaboration avec les universités nationales", href: "/Realisations/education/universites" },
        { name: "Charte de Citoyenneté", href: "/Realisations/education/charte" },
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
        { name: "Barbados et Espagne/Azilal", href: "/Realisations/échange-culturel/barbados-espagnols" },
        { name: "Combattre L'extrémisme", href: "/Realisations/échange-culturel/extremisme" },
        { name: "Dialogue inter-religieux", href: "/Realisations/échange-culturel/dialogueb-interreligieux" },
      ],
    },
    {
      title: "BED",
      items: [
        { name: "La Mutuelle Communautaire", href: "/Realisations/bed/mutuelle" },
        { name: "Approvisionnement en Eau Potable 12 Douars", href: "/Realisations/bed/eau-potable" },
        { name: "Au service de la femme rurale", href: "/Realisations/bed/femmes" },
      ],
    },
    {
      title: "Tourisme de Montagne",
      items: [
        { name: "Balisage de Circuits", href: "/Realisations/tourisme/balisage" },
        { name: "Circuit Touristique d'Ouzoud", href: "/Realisations/tourisme/ouzoud" },
        { name: "Pavage Tanaghmelt", href: "/Realisations/tourisme/pavage" },
      ],
    },
    {
      title: "Sahara Marocain",
      items: [
        { name: "Forte Imlicatiers", href: "/Realisations/sahara-marocain/forte" },
        { name: "Modèle de Développement", href: "/Realisations/sahara-marocain/modele-developpement" },
      ],
    },
  ];

  
  function throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return function (this: any, ...args: Parameters<T>): void {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  return (
    <nav className="relative z-50" ref={navRef}>
      <div className="w-full mx-auto">
        
        <div className={`
          relative transition-all duration-700 ease-out
          ${isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-white/30"
            : "bg-white/90 backdrop-blur-xl shadow-lg border-b border-white/40"
          }
        `}>
          <div className="flex justify-between items-center h-20 lg:h-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

            {/* Logo مع تأثيرات سلسة */}
            <a
              href="/"
              className="flex items-center group relative"
              onMouseEnter={() => setActiveItem('logo')}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="relative transition-all duration-500 group-hover:scale-105">
                <img
                  src={logo}
                  alt="AADEC Logo"
                  className="h-16 lg:h-20 w-auto transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#146C2D]/0 to-[#146C2D]/0 rounded-lg group-hover:from-[#146C2D]/10 group-hover:to-transparent transition-all duration-500" />
              </div>
            </a>

            {/* Desktop Navigation - تصميم أكثر احترافية */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-1 relative">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeItem === item.name;

                return item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button
                      className={`
                        flex items-center text-gray-700 font-medium px-4 py-3 rounded-2xl
                        transition-all duration-500 ease-out
                        hover:text-[#146C2D] hover:bg-white/80
                        border border-transparent hover:border-white/50
                        relative overflow-hidden group
                        ${isActive ? 'text-[#146C2D] bg-white/80' : ''}
                      `}
                      onMouseEnter={() => setActiveItem(item.name)}
                      onMouseLeave={() => setActiveItem(null)}
                    >
                      
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />

                      {/* تأثير الخلفية المتحرك */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#146C2D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>

                    {/* Dropdown مع تأثيرات متطورة */}
                    <div className="absolute left-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-2xl opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-out z-50 border border-white/30">
                      <div className="p-2">
                        {item.dropdown.map((sub, index) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 text-gray-600 rounded-xl hover:text-[#146C2D] hover:bg-[#146C2D]/5 transition-all duration-300 group/item cursor-pointer"
                            style={{ transitionDelay: `${index * 50}ms` }}
                          >
                            <span className="flex items-center group-hover/item:translate-x-2 transition-transform duration-300">
                              {sub.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item.mega ? (
                  <div key={item.name} className="relative" ref={megaMenuRef}>
                    <button
                      className={`
                        flex items-center text-gray-700 font-medium px-4 py-3 rounded-2xl
                        transition-all duration-500 ease-out
                        hover:text-[#146C2D] hover:bg-white/80
                        border border-transparent hover:border-white/50
                        relative overflow-hidden
                        ${isMegaOpen || isActive ? 'text-[#146C2D] bg-white/80' : ''}
                      `}
                      onMouseEnter={() => {
                        setActiveItem(item.name);
                        setIsMegaOpen(true);
                      }}
                      onClick={() => setIsMegaOpen(!isMegaOpen)}
                    >
                      
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isMegaOpen ? "rotate-180" : ""}`} />

                      <div className="absolute inset-0 bg-gradient-to-r from-[#146C2D]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                    </button>

                    {/* Mega Menu محسن */}
                    {isMegaOpen && (
                      <div
                        className="absolute left-1/2 top-full transform -translate-x-1/2 mt-3 
    bg-white shadow-2xl border border-gray-200 p-8 grid grid-cols-3 gap-6 
    z-50 rounded-3xl max-h-[70vh] overflow-y-auto w-[90vw] max-w-6xl"
                        onMouseLeave={() => {
                          setIsMegaOpen(false);
                          setActiveItem(null);
                        }}
                      >
                        {megaMenu.map((col, colIndex) => (
                          <div
                            key={col.title}
                            className="bg-gradient-to-br from-white/50 to-white/20 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/40 hover:border-[#146C2D]/20 group/col"
                            style={{ animationDelay: `${colIndex * 100}ms` }}
                          >
                            <h3 className="font-bold text-[#146C2D] mb-4 text-sm group-hover/col:translate-x-1 transition-transform duration-300">
                              {col.title}
                            </h3>
                            <ul className="space-y-2">
                              {col.items.map((item, itemIndex) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className="block text-gray-600 hover:text-[#146C2D] transition-all duration-300 text-sm hover:pl-2 group/link cursor-pointer py-1"
                                    onClick={() => setIsMegaOpen(false)}
                                    style={{ transitionDelay: `${itemIndex * 30}ms` }}
                                  >
                                    <span className="group-hover/link:bg-white/50 group-hover/link:px-2 group-hover/link:py-1 group-hover/link:rounded-lg transition-all duration-300 block">
                                      {item.name}
                                    </span>
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
                    className={`
                      flex items-center text-gray-700 font-medium px-4 py-3 rounded-2xl
                      transition-all duration-500 ease-out
                      hover:text-[#146C2D] hover:bg-white/80
                      border border-transparent hover:border-white/50
                      relative overflow-hidden group
                      ${isActive ? 'text-[#146C2D] bg-white/80' : ''}
                    `}
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    
                    <span className="relative z-10">{item.name}</span>

                    {/* تأثير التحت الخط */}
                    <div className="absolute bottom-2 left-4 right-4 h-0.5 bg-[#146C2D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </a>
                )
              })}
            </div>

            {/* Mobile menu button - تصميم محسن */}
            <div className="lg:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setOpenSection(null);
                  setIsMegaOpen(false);
                }}
                className={`
                  hover:bg-white/80 transition-all duration-500 
                  focus-visible:ring-0 focus-visible:ring-offset-0
                  rounded-2xl border border-transparent hover:border-white/50
                  ${isOpen ? 'bg-white/80' : ''}
                `}
              >
                {isOpen ? (
                  <X className="h-6 w-6 transition-all duration-500 rotate-90 scale-110" style={{ color: "#146C2D" }} />
                ) : (
                  <Menu className="h-6 w-6 transition-all duration-500" style={{ color: "#146C2D" }} />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation - تصميم أكثر سلاسة */}
          {isOpen && (
            <div className="lg:hidden px-4 pb-6 bg-white/98 backdrop-blur-2xl rounded-b-3xl border-t border-white/30 max-h-[80vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top duration-500">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return item.dropdown ? (
                  <div key={item.name} className="border-t border-white/20 first:border-t-0">
                    <button
                      className="flex items-center justify-between w-full cursor-pointer px-4 py-4 font-medium text-gray-700 hover:text-[#146C2D] transition-all duration-300 hover:bg-white/50 rounded-2xl"
                      onClick={() => setOpenSection(openSection === item.name ? null : item.name)}
                    >
                      <div className="flex items-center">
                        <IconComponent className="h-4 w-4 mr-3" />
                        {item.name}
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openSection === item.name ? "rotate-180" : ""}`} />
                    </button>

                    {openSection === item.name && (
                      <div className="pl-8 pr-4 py-2 space-y-1 animate-in fade-in duration-300">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block text-gray-600 hover:text-[#146C2D] py-3 px-4 transition-all duration-300 hover:bg-[#146C2D]/5 rounded-xl cursor-pointer"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.mega ? (
                  <div key={item.name} className="border-t border-white/20">
                    <button
                      className="w-full flex justify-between items-center px-4 py-4 font-medium text-gray-700 hover:text-[#146C2D] transition-all duration-300 hover:bg-white/50 rounded-2xl"
                      onClick={() => setOpenSection(openSection === item.name ? null : item.name)}
                    >
                      <div className="flex items-center">
                        <IconComponent className="h-4 w-4 mr-3" />
                        {item.name}
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${openSection === item.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {openSection === item.name && (
                      <div className="pl-4 pr-2 py-4 grid grid-cols-1 gap-3 max-h-[50vh] overflow-y-auto animate-in fade-in duration-500">
                        {megaMenu.map((col) => (
                          <div key={col.title} className="bg-white/50 p-4 rounded-xl border border-white/30">
                            <h4 className="font-bold text-[#146C2D] text-sm mb-3">
                              {col.title}
                            </h4>
                            <ul className="space-y-2">
                              {col.items.map((sub) => (
                                <li key={sub.name}>
                                  <a
                                    href={sub.href}
                                    className="block text-gray-600 hover:text-[#146C2D] text-sm py-2 transition-all duration-300 hover:pl-2 cursor-pointer"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setOpenSection(null);
                                    }}
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
                    className="flex items-center px-4 py-4 text-gray-700 hover:text-[#146C2D] font-medium transition-all duration-300 hover:bg-white/50 rounded-2xl border-t border-white/20 first:border-t-0 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <IconComponent className="h-4 w-4 mr-3" />
                    {item.name}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;