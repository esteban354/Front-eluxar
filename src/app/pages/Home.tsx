import React from "react";
import { Hero } from "../components/Hero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export const Home = () => {
  return (
    <main>
      <Hero />

      {/* Sección de Productos - Tarjetas placeholder */}
      <section className="py-24 bg-[#EDEDED] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-[#111111] tracking-tight mb-4">Recomendado para Ti</h2>
            <p className="text-sm text-[#2B2B2B]/60 font-light max-w-xl">
              Según tus preferencias olfativas y tendencias actuales, nuestro asistente inteligente ha seleccionado estas fragancias para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] bg-[#E0E0E0] overflow-hidden mb-6 flex items-center justify-center">
                  <span className="text-[#2B2B2B]/30 text-sm uppercase tracking-widest font-light">Contenedor de producto</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[#2B2B2B]/30 text-sm font-light tracking-wide">Contenedor de producto</span>
                  <span className="text-[#2B2B2B]/20 text-[10px] uppercase tracking-[0.15em] font-light">Fragancia</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Collections Grid */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-[16/9] group cursor-pointer overflow-hidden bg-[#EDEDED]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1720423514789-15a33e59fc81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGVyZnVtZSUyMGJvdHRsZSUyMHN0dWRpbyUyMGx1eHVyeSUyMGZyYWdyYW5jZSUyMG5ldXRyYWwlMjBiYWNrZ3JvdW5kJTIwZ2xhc3N8ZW58MXx8fHwxNzcxNzE4NTEwfDA"
              alt="Fragancias Neutras"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#111111]/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Esenciales</span>
              <h2 className="text-3xl font-light tracking-tight mb-8">Fragancias Neutras</h2>
              <span className="border-b border-white pb-1 text-[10px] uppercase tracking-widest font-bold cursor-pointer hover:opacity-60">Ver Todo</span>
            </div>
          </div>
          <div className="relative aspect-[16/9] group cursor-pointer overflow-hidden bg-[#EDEDED]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762815716180-1d3a167828f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGVyZnVtZSUyMGJvdHRsZSUyMHN0dWRpbyUyMG5ldXRyYWx8ZW58MXx8fHwxNzcxNzE4NzI5fDA"
              alt="Ediciones Limitadas"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#111111]/10" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Premium</span>
              <h2 className="text-3xl font-light tracking-tight mb-8">Ediciones Limitadas</h2>
              <span className="border-b border-white pb-1 text-[10px] uppercase tracking-widest font-bold cursor-pointer hover:opacity-60">Explorar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados - Tarjetas placeholder */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-[#111111] tracking-tight mb-4">Productos Destacados</h2>
            <p className="text-sm text-[#2B2B2B]/60 font-light max-w-xl">
              Fragancias icónicas seleccionadas por su composición única y aceptación global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative aspect-[4/5] bg-[#E0E0E0] overflow-hidden mb-6 flex items-center justify-center">
                  <span className="text-[#2B2B2B]/30 text-sm uppercase tracking-widest font-light">Contenedor de producto</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[#2B2B2B]/30 text-sm font-light tracking-wide">Contenedor de producto</span>
                  <span className="text-[#2B2B2B]/20 text-[10px] uppercase tracking-[0.15em] font-light">Fragancia</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};