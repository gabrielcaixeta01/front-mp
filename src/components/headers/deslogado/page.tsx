import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useRole } from "@/app/context/RoleContext";

export default function HeaderDeslogado() {  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { role } = useRole();

    return(  
    <header className="w-full bg-white border-b-4 border-red-600 py-3 shadow-md relative z-50">
        <div className="flex justify-between items-center px-6">
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-black hover:text-red-600 transition duration-300"
            >
                <Menu size={35} />
            </button>
            <Link href={"/role-selection"}>
                <button
                    className="bg-gray-200 hover:bg-red-600 text-black text-sm hover:text-white py-2 px-5 rounded-md transition duration-500 hover:shadow-lg"
                >
                    Login ou Cadastro
                </button>
            </Link>
        </div>
        
        {/* Menu Lateral */}
        <div className={`fixed left-0 top-0 h-full w-64 bg-red-600 shadow-lg p-4 z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-white hover:text-gray-300 transition duration-300 mb-4"
            >
                <Menu size={35} />
            </button>
            <nav className="flex flex-col space-y-5">
                <Link href="/" className="text-white hover:text-gray-300">Produtos comprados</Link>
                <Link href="/about" className="text-white hover:text-gray-300">Lojas parceiras</Link>
                <Link href="/about" className="text-white hover:text-gray-300">Localizações</Link>
                <Link href={role === "vendedor" ? "/vendedor" : "/cliente"} className="text-white hover:text-gray-300">Perfil</Link>
            </nav>
        </div>
    </header>
    );
}
