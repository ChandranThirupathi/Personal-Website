
import { Mail, Github, Linkedin, Download } from "lucide-react";

const ContactLink = ({ 
  href, 
  icon: Icon, 
  label,
  username 
}: { 
  href: string;
  icon: typeof Mail;
  label: string;
  username: string;
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-all"
    >
      <div className="bg-primary/10 p-3 rounded-full mr-4">
        <Icon className="text-primary" size={20} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{username}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-on-scroll">
          <ContactLink 
            href="mailto:chandranthiru22@gmail.com"
            icon={Mail}
            label="Email"
            username="chandranthiru22@gmail.com"
          />
          
          <ContactLink 
            href="https://github.com/ChandranThirupathi"
            icon={Github}
            label="GitHub"
            username="ChandranThirupathi"
          />
          
          <ContactLink 
            href="https://linkedin.com/in/chandrant"
            icon={Linkedin}
            label="LinkedIn"
            username="chandrant"
          />
        </div>
        
        <div className="flex justify-center mt-12 animate-on-scroll">
          <a 
            href="#" 
            className="btn btn-primary flex items-center"
            onClick={(e) => e.preventDefault()} // Replace with actual download
          >
            <Download className="mr-2" size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
