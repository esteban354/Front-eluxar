import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-[#EDEDED] overflow-hidden">
     

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center">
          <span className="text-[#3A4A3F] uppercase tracking-[0.4em] text-xs font-semibold mb-6">
            Colección Atemporal
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#111111] leading-tight tracking-tight mb-8">
            La Esencia del <br />
            Equilibrio Puro
          </h1>
          <p className="text-[#2B2B2B]/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Descubre fragancias diseñadas para trascender el género.
            Una oda al minimalismo, la sofisticación y el lujo contemporáneo.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="bg-[#111111] text-white px-10 py-4 text-sm uppercase tracking-widest cursor-pointer hover:bg-[#3A4A3F]">
              Descubre tu aroma con IA
            </span>
            <span className="border border-[#111111] text-[#111111] px-10 py-4 text-sm uppercase tracking-widest cursor-pointer hover:bg-[#111111] hover:text-white flex items-center group">
              Ver Colección
              <ArrowRight size={16} className="ml-2" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
