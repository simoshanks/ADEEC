import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/Apropos' },
    { name: 'Activités', href: '/Activites' },
    { name: 'Réalisations', href: '/Réalisations' },
    {
      name: 'Partenaires',
      dropdown: [
        { name: 'Organismes Nationaux', href: '/partenaire1' },
        { name: 'Organismes Internationaux ', href: '/partenaire2' },
        { name: 'Administrations Ministérielles ', href: '/partenaire3' },
        { name: 'Les conseils et Collectivités', href: '/partenaire4' },
      ],
    },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Contact', href: '/Contact' },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl border border-[#000] shadow-md">
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="AADEC Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative">
                    <button
                      className="flex items-center space-x-1 text-black font-medium hover:text-[#146C2D] transition-colors duration-300"
                      onClick={() => setIsPartnerOpen(!isPartnerOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isPartnerOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isPartnerOpen && (
                      <div className="absolute left-0 mt-2 w-52 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 py-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-black font-medium hover:text-[#146C2D] transition-colors duration-300"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-black font-medium transition-colors duration-300 hover:text-[#146C2D]"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-black" />
                ) : (
                  <Menu className="h-6 w-6 text-black" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden px-4 pb-3 bg-white/90 backdrop-blur-md rounded-b-2xl border-t border-gray-200">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="mb-2">
                    <button
                      className="flex w-full items-center justify-between px-3 py-2 text-black font-medium hover:text-[#146C2D]"
                      onClick={() => setIsPartnerOpen(!isPartnerOpen)}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isPartnerOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isPartnerOpen && (
                      <div className="ml-4 border-l border-gray-200 pl-3">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-black hover:text-[#146C2D] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-black hover:text-[#146C2D] transition-colors duration-300 font-medium"
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
