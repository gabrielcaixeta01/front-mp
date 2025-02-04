"use client";

import { useRole } from "@/app/context/RoleContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
    const { role } = useRole();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulação de cadastro bem-sucedido
        localStorage.setItem("user", JSON.stringify({ email, name, role }));
        router.push("/login");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-gray-300 rounded-2xl p-8 shadow-lg text-center relative">
                <button onClick={() => router.back()} className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                    Voltar
                </button>
                <button onClick={() => router.push("/login")} className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                    Já tenho conta
                </button>
                <h1 className="text-2xl font-bold mb-2 text-red-600">Crie sua conta</h1>
                <p className="text-lg font-semibold text-gray-800 mb-2 uppercase">Criando conta como {role}</p>
                <p className="text-sm text-gray-700 mb-6">Adicione as suas informações</p>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 text-black border-red-500 rounded-lg focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 text-black border-red-500 rounded-lg focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 text-black border-red-500 rounded-lg focus:outline-none"
                    />
                    <button type="submit" className="w-full px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
                        Criar conta
                    </button>
                </form>
            </div>
        </div>
    );
}
