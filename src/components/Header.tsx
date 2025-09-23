import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ldpLogo from '@/assets/ldp-logo-transparent.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Почеток', type: 'scroll' },
    { id: 'ai-project', label: 'АИ Советник', type: 'scroll' },
    { id: 'projects', label: 'Проекти', type: 'scroll' },
    { id: 'about', label: 'За кандидатот', type: 'scroll' },
    { id: 'blog', label: 'Блог', type: 'link', href: '/blog' },
    { id: 'contact', label: 'Контакт', type: 'scroll' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={ldpLogo}
              alt="ЛДП - Либерална Демократска Партија"
              className="h-10 lg:h-12 w-auto cursor-pointer"
              onClick={() => scrollToSection('hero')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) =>
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.href!}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) =>
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.href!}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors duration-200 w-full text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors duration-200 w-full text-left"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
