
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">
          <span className="font-semibold">Chandran T</span> &middot; AI & Data Science Student
        </p>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="mailto:chandranthiru22@gmail.com" 
            className="hover:text-white/80 transition-colors"
            aria-label="Email"
          >
            Email
          </a>
          <a 
            href="https://github.com/ChandranThirupathi" 
            className="hover:text-white/80 transition-colors"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/chandrant" 
            className="hover:text-white/80 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        
        <p className="text-sm text-primary-foreground/70">
          &copy; {year} Chandran T. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
