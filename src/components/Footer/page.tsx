const Footer: React.FC = () => {
    return (
      <footer className="bg-red-600 text-white py-6 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
          <nav className="flex space-x-4">
            <a href="/about" className="hover:underline text-sm">Sobre</a>
            <a href="/contact" className="hover:underline text-sm">Contato</a>
            <a href="/privacy" className="hover:underline text-sm">Privacidade</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  