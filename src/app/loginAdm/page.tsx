"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulação de login bem-sucedido
        localStorage.setItem("admin", JSON.stringify({ email }));
        router.push("/adm");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-sm bg-black rounded-2xl p-6 shadow-lg text-center relative">
                <button onClick={() => router.back()} className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-full text-sm">
                    Voltar
                </button>
                <h1 className="text-2xl font-bold mb-6 text-white">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none bg-gray-200 text-black"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none bg-gray-200 text-black"
                    />
                    <button type="submit" className="w-full px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-300 transition">
                        Logar
                    </button>
                </form>
            </div>
        </div>
    );
}
