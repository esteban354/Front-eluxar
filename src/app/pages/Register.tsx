import { Link } from "react-router";
import { Mail, Lock, User, ArrowRight, Eye } from "lucide-react";

export const Register = () => {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center px-6 pt-32 pb-24">
            <div className="max-w-md w-full space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-light text-[#111111] tracking-tight uppercase tracking-[0.3em]">
                        Crear Cuenta
                    </h1>
                    <p className="text-[#2B2B2B]/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                        Únete a la colección de alta perfumería
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-8">
                    <div className="flex flex-col space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#2B2B2B]/40">Nombre Completo</label>
                        <div className="relative border-b border-[#2B2B2B]/20 py-2 group focus-within:border-[#111111]">
                            <User className="absolute right-0 top-1/2 -translate-y-1/2 text-[#2B2B2B]/20 group-focus-within:text-[#111111]" size={16} />
                            <input type="text" className="bg-transparent border-none outline-none w-full text-sm font-medium pr-10" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#2B2B2B]/40">Correo Electrónico</label>
                        <div className="relative border-b border-[#2B2B2B]/20 py-2 group focus-within:border-[#111111]">
                            <Mail className="absolute right-0 top-1/2 -translate-y-1/2 text-[#2B2B2B]/20 group-focus-within:text-[#111111]" size={16} />
                            <input type="email" className="bg-transparent border-none outline-none w-full text-sm font-medium pr-10" />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-[#2B2B2B]/40">Contraseña</label>
                        <div className="relative border-b border-[#2B2B2B]/20 py-2 group focus-within:border-[#111111]">
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#2B2B2B]/20 hover:text-[#111111]">
                                <Eye size={16} />
                            </button>
                            <input type="password" className="bg-transparent border-none outline-none w-full text-sm font-medium pr-10" />
                        </div>
                    </div>

                    <button className="w-full bg-[#111111] text-white py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#3A4A3F] flex items-center justify-center space-x-3 shadow-lg shadow-black/5">
                        <span>Crear Perfil</span>
                        <ArrowRight size={14} />
                    </button>
                </div>

                {/* Footer */}
                <div className="text-center pt-8 border-t border-[#EDEDED] space-y-6">
                    <Link
                        to="/login"
                        className="text-[10px] uppercase tracking-widest font-bold text-[#2B2B2B]/40 hover:text-[#111111]"
                    >
                        ¿Ya tienes cuenta? Inicia sesión
                    </Link>

                    <div className="flex items-center justify-center space-x-12 pt-4">
                        <div className="h-px bg-[#EDEDED] flex-1" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#2B2B2B]/20">O</span>
                        <div className="h-px bg-[#EDEDED] flex-1" />
                    </div>

                    <div className="flex flex-col space-y-4">
                        <button className="w-full border border-[#EDEDED] py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#EDEDED] flex items-center justify-center space-x-3">
                            <span>Acceder con Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};
