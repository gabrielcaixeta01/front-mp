import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useRole } from "@/app/context/RoleContext";

export default function HeaderDeslogado() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { role } = useRole();
  const [searchText, setSearchText] = useState(""); // Estado para capturar texto da barra de pesquisa

  const handleSearch = () => {
    console.log("Pesquisando por:", searchText);
    // Lógica adicional pode ser implementada aqui
  };

  return (
    <header className="w-full bg-white border-b-4 border-red-600 py-3 shadow-md relative z-50">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:text-red-600 transition duration-300"
          >
            <Menu size={35} />
          </button>
          <div>
            <p className="text-2xl font-bold text-red-600">
              PinApp
            </p>
            
          </div>
        </div>


        {/* Barra de Pesquisa */}
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Pesquise seu produto aqui..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-[900px] h-[48px] px-4 py-2 rounded-l-[30px] rounded-r-lg border border-[#150606] text-black focus:outline-none focus:border-red-600 transition duration-300"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-l-lg rounded-r-[30px] transition duration-300"
          >
            Buscar
          </button>
        </div>

        <Link href={"/role-selection"}>
          <button className="bg-gray-200 hover:bg-red-600 text-black text-sm hover:text-white py-3 px-5 rounded-md transition duration-500 hover:shadow-lg">
            Login ou Cadastro
          </button>
        </Link>
      </div>

      {/* Menu Lateral */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-red-600 shadow-lg p-4 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="text-white hover:text-gray-300 transition duration-300 mb-4"
        >
          <Menu size={35} />
        </button>
        <nav className="flex flex-col space-y-5">
          <Link 
            href={role === "vendedor" ? "/vendedor" : "/cliente"} 
            className="text-white hover:text-gray-300"
          >
            Produtos comprados
          </Link>
          <Link href="/stores" className="text-white hover:text-gray-300">
            Lojas parceiras
          </Link>
          <Link href="/localizacao" className="text-white hover:text-gray-300">
            Localizações
          </Link>
          <Link
            href={role === "vendedor" ? "/vendedor" : "/cliente"}
            className="text-white hover:text-gray-300"
          >
            Perfil
          </Link>
        </nav>
      </div>
    </header>
  );
}
