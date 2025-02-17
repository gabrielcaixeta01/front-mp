"use client";

import { useRouter } from "next/navigation";
import StoreCard from "@/components/StoreCard/page";

const AllPartnerStoresPage: React.FC = () => {
  const router = useRouter();

  const stores = [
    { id: "loja-1", name: "Loja 1", image: "/loja1.png", alt: "Logo Loja 1" },
    { id: "loja-2", name: "Loja 2", image: "/loja2.png", alt: "Logo Loja 2" },
    { id: "loja-3", name: "Loja 3", image: "/loja3.png", alt: "Logo Loja 3" },
    { id: "loja-4", name: "Loja 4", image: "/loja4.png", alt: "Logo Loja 4" },
  ];

  const handleStoreClick = (storeName: string) => {
    router.push(`/stores/${storeName.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div className="w-full min-h-screen bg-white px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-8">Todas as Lojas Parceiras</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {stores.map((store) => (
          <div key={store.id} onClick={() => handleStoreClick(store.name)} className="cursor-pointer">
            <StoreCard imageSrc={store.image} altText={store.alt} storeName={store.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPartnerStoresPage;