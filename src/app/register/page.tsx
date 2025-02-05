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
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-lg bg-red-500 rounded-2xl p-8 shadow-md text-center relative">
                <button onClick={() => router.back()} className="absolute top-4 shadow-md left-4 bg-white hover:bg-gray-200 text-black transition duration-500 px-4 py-2 rounded-full text-sm">
                    Voltar
                </button>
                <button onClick={() => router.push("/login")} className="absolute top-4 shadow-md right-4 bg-white hover:bg-gray-200  text-black transition duration-500 px-4 py-2 rounded-full text-sm">
                    Já tenho conta
                </button>
                <h1 className="text-3xl font-bold mt-16 text-white">Crie sua conta</h1>
                <p className=" text-black text-sm mb-2">Criando conta como {role}</p>

                <form onSubmit={handleRegister} className="space-y-4 px-4 py-8">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-black border-b-2 border-gray-100 rounded-[12px] focus:outline-none focus:border-black transition duration-300"
                    />
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-black border-b-2 border-gray-300 rounded-[12px] focus:outline-none focus:border-black transition duration-300"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-black border-b-2 border-gray-300 rounded-[12px] focus:outline-none focus:border-black transition duration-300"
                    />
                    <button type="submit" className="w-fit px-6 py-3 shadow-md bg-white hover:bg-gray-200 text-red-500 rounded-[12px] transition duration-500">
                        Criar conta
                    </button>
                </form>
            </div>
        </div>
    );
}
