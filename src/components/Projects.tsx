
import { Laptop, Database, Bot } from "lucide-react";

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  metrics, 
  icon: Icon 
}: { 
  title: string;
  description: string;
  techStack: string[];
  metrics?: string;
  icon: typeof Laptop;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-full mr-3">
          <Icon className="text-primary" size={24} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      {metrics && (
        <p className="text-primary font-medium mb-4">
          {metrics}
        </p>
      )}
      <div>
        <h4 className="font-medium mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-secondary rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "DeStock",
      description: "A stock and product bidding platform that includes auction and fixed-price sales.",
      techStack: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      icon: Laptop
    },
    {
      title: "AI-Driven Grade Prediction System",
      description: "A system built to predict student grades based on historical data and student behavior patterns.",
      techStack: ["IBM SPSS Modeler", "Python", "Data Analysis"],
      icon: Database
    },
    {
      title: "Gen-AI Driven Autonomous Robots",
      description: "Autonomous robots that use generative AI and reinforcement learning to adapt to various environments and tasks.",
      techStack: ["Python", "Reinforcement Learning", "Generative AI"],
      metrics: "90% task success rate",
      icon: Bot
    }
  ];

  return (
    <section id="projects" className="bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              metrics={project.metrics}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
