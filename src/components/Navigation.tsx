import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/Apropos' },
    { name: 'Activités', href: '/Activites' },
    { name: 'Réalisations', href: '/Realisations' },
    { name: 'Partenaires', href: '/Partenaires' },
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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black font-medium transition-colors duration-300 hover:text-[#146C2D]"
                >
                  {item.name}
                </a>
              ))}
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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-black hover:text-[#146C2D] transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
