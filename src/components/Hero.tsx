
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-primary/20">
          {/* Placeholder for profile image */}
          <div className="w-full h-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
            <span className="text-4xl font-semibold text-primary">CT</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Chandran T
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
          Fond of Robotics and AI/ML | B.Tech - AI & Data Science Student
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <a 
            href="#about" 
            className="btn btn-primary"
          >
            About Me
          </a>
          <a 
            href="#projects" 
            className="btn btn-outline"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce p-3"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-primary" size={24} />
      </a>
    </section>
  );
};

export default Hero;
