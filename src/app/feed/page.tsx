"use client";
import HeaderDeslogado from "@/components/headers/deslogado/page";
import Image from "next/image";

export default function FeedPage() {
    return (
        <div className="bg-white h-screen">
            <HeaderDeslogado />
            <section className="bg-white text-center py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4 text-[#E02222]">
                        Economize tempo e dinheiro
                    </h1>
                    <p className="text-2xl font-semibold text-black">
                        Agilidade. Objetividade. Eficácia.
                    </p>
                </div>
                <img src="/ImagemBanner.png" alt="Imagem frutas" className="w-full h-[500px] object-cover mt-10" />
            </section>
            <section className="bg-white py-16 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div>
                    <img src="/ImagemLoc.png" alt="Localização" className="w-[240px] h-[200px] rounded-lg shadow-lg ml-[202px]" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold text-[#E02222] mb-4">
                            Localização
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 text-center">
                            Compartilhe sua localização para que possamos recomendar as melhores lojas da nossa feira para você comprar
                        </p>

                        <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
                            Informe sua Localização
                        </button>
                    </div>
                </div>
            </section>
        </div>

    );
}