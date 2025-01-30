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
        <div className="flex h-60 items-center w-full justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-gray-300 rounded-2xl p-6 shadow-lg text-center relative">
                <button 
                    onClick={() => router.push("/feed")} 
                    className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm"
                >
                    Voltar
                </button>
                <h1 className="text-2xl font-bold mb-6">Quem é você?</h1>
                <button 
                    onClick={() => handleSelection("cliente")}
                    className="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition mb-3"
                >
                    Sou cliente
                </button>
                <button 
                    onClick={() => handleSelection("vendedor")}
                    className="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition mb-3"
                >
                    Sou vendedor
                </button>
                <button 
                    onClick={() => handleSelection("administrador")}
                    className="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
                >
                    Sou administrador
                </button>
            </div>
        </div>
    );
}
