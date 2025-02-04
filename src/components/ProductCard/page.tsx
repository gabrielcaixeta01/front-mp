import Image from "next/image";

interface ProductCardProps {
  imageSrc: string;
  altText: string;
  productName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, altText, productName }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center bg-gray-100">
      <div className="w-[200px] h-[200px] ">
        <Image 
          src={imageSrc} 
          alt={altText} 
          width={200} 
          height={200} 
          objectFit="cover"
          className="border border-black rounded-lg"
        />
      </div>
      <h2 className="text-lg text-black font-semibold mt-6">{productName}</h2>
    </div>
  );
};

export default ProductCard;