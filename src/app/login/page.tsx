"use client";

import { useRole } from "@/app/context/RoleContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const { role } = useRole();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulação de login bem-sucedido
        localStorage.setItem("user", JSON.stringify({ email, role }));
        if (role === "cliente") router.push("/cliente");
        if (role === "vendedor") router.push("/vendedor");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-gray-300 rounded-2xl p-6 shadow-lg text-center relative">
                <button onClick={() => router.back()} className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                    Voltar
                </button>
                <button onClick={() => router.push("/register")} className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm">
                    Não tenho conta
                </button>
                <h2 className="text-lg font-semibold mt-8">Seja bem-vindo, {role}!</h2>
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        Logar
                    </button>
                </form>
            </div>
        </div>
    );
}
