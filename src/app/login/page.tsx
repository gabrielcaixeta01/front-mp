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
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-sm bg-gray-200 rounded-2xl p-6 shadow-lg text-center relative">
                <button onClick={() => router.back()} className="absolute top-4 left-4 bg-white text-black hover:bg-black hover:text-white transition duration-500 px-4 py-2 rounded-full text-sm">
                    Voltar
                </button>
                <button onClick={() => router.push("/register")} className="absolute top-4 right-4 bg-white text-black hover:bg-black hover:text-white transition duration-500 px-4 py-2 rounded-full text-sm">
                    Não tenho conta
                </button>
                <h2 className="text-lg text-red-500 font-semibold mt-16">Seja bem-vindo, {role}!</h2>
                <h1 className=" text-gray-400 mb-6">Realize seu login</h1>
                <form onSubmit={handleLogin} className="space-y-4 px-5">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-black border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition duration-300"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-black border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-500 transition duration-300"
                    />
                    <button type="submit" className="w-fit px-10 py-2 hover:bg-red-600 hover:text-white text-red-500 shadow-md rounded-xl bg-white transition duration-500">
                        Logar
                    </button>
                </form>
            </div>
        </div>
    );
}
