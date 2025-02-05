"use client";

import { useRouter } from "next/navigation";

export default function RoleSelection() {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <div className="flex items-center w-full justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-[25%] min-h-fit bg-gray-300 py-10 rounded-2xl shadow-lg text-center relative border border-black">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-semibold text-black mt-6">
                        Entre na sua conta para compartilhar os serviços de localização
                    </h1>
                    <div className="w-full px-16 py-3 flex flex-col items-center mt-10">
                        {/* Botão Entrar */}
                        <button
                            onClick={() => handleNavigation("/login")}
                            className="w-full px-6 py-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition duration-500 mb-3"
                        >
                            Entrar
                        </button>
                        
                        {/* Botão Cadastrar */}
                        <button
                            onClick={() => handleNavigation("/register")}
                            className="w-full px-6 py-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition duration-500 mb-3"
                        >
                            Cadastrar
                        </button>
                        
                        {/* Botão Voltar */}
                        <button
                            onClick={() => handleNavigation("/feed")}
                            className="w-full px-6 py-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition duration-500 mb-3"
                        >
                            Voltar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
