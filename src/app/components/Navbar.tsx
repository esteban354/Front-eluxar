import { Link, useLocation } from "react-router";
import { Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled || location.pathname !== "/" ? "bg-white/80 backdrop-blur-md py-4 border-b border-[#EDEDED]" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#2B2B2B]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links - Left */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/login" className="text-[#2B2B2B] text-sm uppercase tracking-widest hover:opacity-60">Coleccion</Link>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link to="/" className="text-2xl font-light tracking-[0.3em] uppercase text-[#111111]">
            Eluxar
          </Link>
        </div>

        {/* Icons - Right */}
        <div className="flex items-center space-x-6">
          <Link to="/login" className="hidden sm:block text-[#2B2B2B] hover:opacity-60">
            <User size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#EDEDED] lg:hidden">
          <div className="flex flex-col p-6 space-y-4">
            <Link to="/login" className="text-[#2B2B2B] text-lg uppercase tracking-widest">Iniciar Sesión</Link>
            <Link to="/register" className="text-[#2B2B2B] text-lg uppercase tracking-widest">Registrarse</Link>
          </div>
        </div>
      )}
    </nav>
  );
};