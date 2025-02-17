"use client";

import { useParams } from "next/navigation";
import Image from "next/image";

const StorePage: React.FC = () => {
  const params = useParams();
  const storeId = params.id;

  const stores = {
    "loja-1": { name: "Loja 1", image: "/loja1.png", description: "Bem-vindo à Loja 1, sua melhor escolha para produtos frescos!" },
    "loja-2": { name: "Loja 2", image: "/loja2.png", description: "Loja 2 oferece variedade e qualidade em um só lugar." },
    "loja-3": { name: "Loja 3", image: "/loja3.png", description: "Na Loja 3, você encontra os melhores produtos com o melhor preço." },
    "loja-4": { name: "Loja 4", image: "/loja4.png", description: "Loja 4: tradição e qualidade há anos no mercado!" },
  };

  const store = stores[storeId as keyof typeof stores];

  if (!store) {
    return <div className="w-full text-center py-20 text-2xl font-bold">Loja não encontrada</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white text-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-600">{store.name}</h1>
      <Image src={store.image} alt={`Logo ${store.name}`} width={300} height={300} className="mx-auto mb-6 rounded-lg border" />
      <p className="text-lg text-gray-700 mb-6">{store.description}</p>
    </div>
  );
};

export default StorePage;
