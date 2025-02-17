const Footer: React.FC = () => {
    return (
      <footer className="bg-red-600 text-white py-6 mt-8">
        <div className="container mx-auto flex flex-col w-full items-center justify-center px-4">
          <p className="text-sm mb-4 md:mb-0 text-center">&copy; {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;