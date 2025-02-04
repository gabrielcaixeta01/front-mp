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

        </div>

    );
}