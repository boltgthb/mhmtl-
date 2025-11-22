import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Anasayfa', href: '#anasayfa' },
    { label: 'Köy Hakkında', href: '#hakkinda' },
    { label: 'Tarihçe', href: '#tarihce' },
    { label: 'Geçmişten Bugüne', href: '#gecmisten-bugune' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Ulaşım', href: '#ulasim' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a
            href="#anasayfa"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#anasayfa');
            }}
            className="text-lg sm:text-xl font-bold text-primary-700"
          >
            Mahmatlı Köyü
          </a>

          <div className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-3 py-2 text-sm text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-700 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
