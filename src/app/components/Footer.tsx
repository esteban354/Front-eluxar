import { Instagram, Twitter, Youtube, Facebook, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#EDEDED] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col space-y-6">
            <span className="text-xl font-light tracking-[0.4em] uppercase text-[#111111]">
              Eluxar
            </span>
            <p className="text-[#2B2B2B]/60 text-sm leading-relaxed max-w-xs font-light">
              Fragancias atemporales para espíritus modernos. 
              Equilibrio puro en cada gota.
            </p>
            <div className="flex space-x-6 items-center">
              <Instagram size={18} className="text-[#2B2B2B] hover:opacity-50 transition-opacity cursor-pointer" />
              <Twitter size={18} className="text-[#2B2B2B] hover:opacity-50 transition-opacity cursor-pointer" />
              <Youtube size={18} className="text-[#2B2B2B] hover:opacity-50 transition-opacity cursor-pointer" />
              <Facebook size={18} className="text-[#2B2B2B] hover:opacity-50 transition-opacity cursor-pointer" />
            </div>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#111111]">Colección</h4>
            <ul className="space-y-3 text-sm text-[#2B2B2B]/60 font-light">
              <li><a href="#" className="hover:text-[#111111] transition-colors">Dulces</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Frescos</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Citricos</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#111111]">Ayuda</h4>
            <ul className="space-y-3 text-sm text-[#2B2B2B]/60 font-light">
              <li><a href="#" className="hover:text-[#111111] transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="#" className="hover:text-[#111111] transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#2B2B2B]/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-[#2B2B2B]/40 font-medium">
          <p>© 2026 ELUXAR. Todos los derechos reservados.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#111111] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#111111] transition-colors">Términos</a>
            <a href="#" className="hover:text-[#111111] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
