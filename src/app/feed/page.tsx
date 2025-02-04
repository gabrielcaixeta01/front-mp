"use client";
import HeaderDeslogado from "@/components/headers/deslogado/page";
import Image from "next/image";

export default function FeedPage() {
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

                        <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
                            Informe sua Localização
                        </button>
                    </div>
                </div>
            </section>


            <section className="py-10 my-10 border-t border-b border-gray-300">
                {/* Título */}
                <div className="text-center ">
                    <h1 className="text-black text-2xl font-bold">Produtos Mais Pesquisados</h1>
                </div>

                {/* Grid de Produtos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 px-10 mt-10">
                    
                    {/* Produto: Coco Geladinho */}
                    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center bg-gray-100">
                        <div className="relative w-[200px] h-[200px]">
                            <Image 
                            src="/coco.png" 
                            alt="Coco geladinho" 
                            width={200} 
                            height={200} 
                            objectFit="cover"
                            className="rounded-md"
                            />
                        </div>
                    <h2 className="text-lg text-black font-semibold mt-6">Coco Geladinho</h2>
                    </div>

                    {/* Produto: Suquinho de Laranja */}
                    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center bg-gray-100">
                    <div className="relative w-[200px] h-[200px]">
                        <Image 
                        src="/suco.png" 
                        alt="Suquinho de Laranja" 
                        width={200} 
                        height={200} 
                        objectFit="cover"
                        className="rounded-md"
                        />
                    </div>
                    <h2 className="text-lg text-black font-semibold mt-6">Suquinho de Laranja</h2>
                    </div>

                    {/* Produto: Picanha do Lula */}
                    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center bg-gray-100">
                        <div className="relative w-[200px] h-[200px]">
                            <Image 
                            src="/carne.png" 
                            alt="Picanha do Lula" 
                            width={200} 
                            height={200} 
                            objectFit="cover"
                            className="rounded-md"
                            />
                        </div>
                    <h2 className="text-lg text-black font-semibold mt-6">Picanha do Lula</h2>
                    </div>

                    {/* Produto: Leitinho de Égua */}
                    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center bg-gray-100">
                    <div className="relative w-[200px] h-[200px]">
                        <Image 
                        src="/leite.png" 
                        alt="Leitinho de Égua" 
                        width={200} 
                        height={200} 
                        objectFit="cover"
                        className="rounded-md"
                        />
                    </div>
                    <h2 className="text-lg text-black font-semibold mt-6">Leitinho de Égua</h2>
                    </div>

                </div>
            </section>
            <section className="py-10 my-10">
                <div className="text-center ">
                    <h1 className="text-black text-2xl font-bold">Lojas Parceiras</h1>
                </div>

            </section>
        </div>

    );
}