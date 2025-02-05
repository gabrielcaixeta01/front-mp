"use client";

import { useRole } from "@/app/context/RoleContext";
import { useRouter } from "next/navigation";

export default function RoleSelection() {
    const { setRole } = useRole();
    const router = useRouter();

    const handleSelection = (role: "cliente" | "vendedor" | "administrador") => {
        setRole(role);
        if (role === "administrador") {
            router.push("/loginAdm");
        } else {
            router.push("/login");
        }
    };

    return (
        <div className="flex items-center w-full justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-[20%] min-h-fit bg-gray-200 py-10 rounded-2xl shadow-lg text-center relative">
                <div>
                    <button 
                    onClick={() => router.push("/feed")} 
                    className="absolute top-4 left-4 bg-white text-black hover:bg-black hover:text-white transition duration-500 px-4 py-1 rounded-full text-sm"
                    >
                        Voltar
                    </button> 
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-semibold text-black mt-6">Quem é você?</h1>
                    <p className="text-gray-500 text-sm mb-6">Selecione como deseja usar nosso site.</p>
                    <div className="w-full px-16 py-3 flex flex-col items-center">
                        <button 
                            onClick={() => handleSelection("cliente")}
                            className="w-full px-6 py-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition duration-500 mb-3"
                        >
                            Sou cliente
                        </button>
                        <button 
                            onClick={() => handleSelection("vendedor")}
                            className="w-full px-6 py-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition duration-500 mb-3"
                        >
                            Sou vendedor
                        </button>
                        <button 
                            onClick={() => handleSelection("administrador")}
                            className="w-full px-6 py-3 bg-white text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition duration-500 mb-3"
                        >
                            Sou administrador
                        </button>
                    </div>
                </div>
                
            
            </div>
        </div>
    );
}
