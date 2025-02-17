"use client";

import HeaderDeslogado from "@/components/headers/deslogado/page";
import ProductCard from "@/components/ProductCard/page";
import Footer from "@/components/Footer/page";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import StoreCard from "@/components/StoreCard/page";

export default function FeedPage() {
    const router = useRouter(); 
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";


    const handleNavigateToLocation = () => {
        router.push("/localizacao"); 
    };

    const handleStoreClick = (storeName: string) => {
        router.push(`/stores/${storeName.toLowerCase().replace(/\s+/g, "-")}`);
    };

    const filteredProducts = [
        { image: "/coco.png", alt: "Coco Geladinho", name: "Coco Geladinho" },
        { image: "/suco.png", alt: "Suquinho de Laranja", name: "Suquinho de Laranja" },
        { image: "/carne.png", alt: "Picanha do Lula", name: "Picanha do Lula" },
        { image: "/leite.png", alt: "Leitinho de Égua", name: "Leitinho de Égua" },
        { image: "/morango.png", alt: "Morango", name: "Moranguinho" },
    ].filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="bg-white h-screen min-h-fit">
            <HeaderDeslogado />
            <section className="w-full text-center py-18">
                <div className="itens-center text-center py-12">
                    <h1 className="text-5xl font-bold my-5 text-[#E02222]">
                        Economize tempo e dinheiro
                    </h1>
                    <p className="text-2xl font-semibold text-black">
                        Agilidade. Objetividade. Eficácia.
                    </p>
                </div>
                <div className="bg-green-500 min-w-fit min-h-fit mt-10">
                    <Image src="/ImagemBanner.png" alt="Imagem frutas" width={1920} height={500} className="w-full h-[500px] object-cover mt-10" />
                </div>
            </section>
            <section className="py-20 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div>
                        <Image src="/ImagemLoc.png" alt="Localização" width={240} height={200} className="rounded-lg shadow-lg ml-[202px]" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold text-[#E02222] mb-4">
                            Localização
                        </h2>
                        <p className="text-lg text-gray-700 mb-6 text-center">
                            Compartilhe sua localização para que possamos recomendar as melhores lojas da nossa feira para você comprar
                        </p>
                        <button
                            onClick={handleNavigateToLocation}
                            className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
                        >
                            Informe sua Localização
                        </button>
                    </div>
                </div>
            </section>
            <section className="py-10 border-t border-b border-gray-300">
                <div className="text-center">
                    <h1 className="text-black text-2xl font-bold">{query ? `Resultados para "${query}"` : "Produtos Mais Pesquisados"}</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10 mt-10">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <ProductCard key={index} imageSrc={product.image} altText={product.alt} productName={product.name} />
                        ))
                    ) : (
                        <p className="text-center text-lg text-gray-600">Nenhum produto encontrado.</p>
                    )}
                </div>
            </section>
            <section className="py-10 my-10">
                <div className="text-center">
                    <h1 className="text-black text-2xl font-bold">Lojas Parceiras</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10 mt-10">
                    <div onClick={() => handleStoreClick("Loja 1")} className="cursor-pointer">
                        <StoreCard imageSrc="/loja1.png" altText="Loja 1" storeName="Loja 1" />
                    </div>
                    <div onClick={() => handleStoreClick("Loja 2")} className="cursor-pointer">
                        <StoreCard imageSrc="/loja2.png" altText="Loja 2" storeName="Loja 2" />
                    </div>
                    <div onClick={() => handleStoreClick("Loja 3")} className="cursor-pointer">
                        <StoreCard imageSrc="/loja3.png" altText="Loja 3" storeName="Loja 3" />
                    </div>
                    <div onClick={() => handleStoreClick("Loja 4")} className="cursor-pointer">
                        <StoreCard imageSrc="/loja4.png" altText="Loja 4" storeName="Loja 4" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}