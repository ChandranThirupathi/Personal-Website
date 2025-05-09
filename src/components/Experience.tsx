
import { Calendar, Briefcase } from "lucide-react";

const ExperienceItem = ({ 
  title, 
  company, 
  period, 
  description 
}: { 
  title: string;
  company: string;
  period: string;
  description: string;
}) => {
  return (
    <div className="mb-8 relative pl-8 animate-on-scroll">
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>
      
      <div className="border-l-2 border-dashed border-primary/30 pl-8 pb-8">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar size={14} className="mr-2" />
          <span>{period}</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <h4 className="text-primary mb-3">{company}</h4>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Club Member",
      company: "AI Innovators Club",
      period: "Aug 2024 - Present",
      description: "Working on real-world projects for external clients, including building an auction website. Currently planning MERN stack projects to expand my full-stack development skills."
    },
    {
      title: "Club Member",
      company: "MKCE Japanese Club",
      period: "Feb 2025 - Present",
      description: "Organizing language events and study exchanges to promote Japanese language and culture. Helping fellow students prepare for JLPT certification exams."
    }
  ];

  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="flex items-center mb-10">
          <Briefcase className="text-primary mr-4" size={32} />
          <h3 className="text-2xl font-semibold">Extracurricular Activities</h3>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
