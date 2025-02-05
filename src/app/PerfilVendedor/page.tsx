"use client";

import { useRouter } from "next/navigation";

export default function PerfilPage() {
    const router = useRouter(); 

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="p-4">
                <button
                    onClick={() => router.back()} 
                    className="bg-black text-white px-4 py-2 rounded-full text-sm"
                >
                    Voltar
                </button>
            </div>

            <div className="max-w-3xl mx-auto p-6 bg-red-600 text-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Nome</h1>
                        <p className="text-lg">email</p>
                        <p className="text-lg">Contato</p>
                        <p className="text-sm mt-1">Nome da loja</p>
                    </div>
                    <div className="bg-white text-red-600 p-4 rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-12 h-12"
                        >
                            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth={2} />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 14c-4.97 0-9 2.02-9 4.5V21h18v-2.5c0-2.48-4.03-4.5-9-4.5z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto mt-8">
                <h2 className="text-xl font-bold mb-4 text-black">Histórico</h2>
                <div className="bg-black p-4 rounded-lg shadow-md">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 text-black">Produtos da loja</th>
                                    <th className="py-2 text-black">Preço</th>
                                    <th className="py-2 text-black">Quantidade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                    <td className="py-2"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}