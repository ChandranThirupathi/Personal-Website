
import { Code, Database, Laptop } from "lucide-react";

const Skills = () => {
  const languages = [
    { name: "Python", level: "Advanced" },
    { name: "C", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "HTML/CSS", level: "Advanced" },
    { name: "PHP", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" }
  ];
  
  const tools = [
    { name: "Git/GitHub", level: "Advanced" },
    { name: "Google Colab", level: "Advanced" },
    { name: "Jupyter Notebook", level: "Advanced" },
    { name: "VS Code", level: "Advanced" },
    { name: "Eclipse", level: "Intermediate" },
    { name: "XAMPP", level: "Intermediate" },
    { name: "IBM SPSS Modeler", level: "Intermediate" }
  ];
  
  return (
    <section id="skills">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Code className="mr-3 text-primary" size={24} />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <ul className="space-y-3">
              {languages.map((lang, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{lang.name}</span>
                  <div className="w-1/2 bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ 
                        width: lang.level === "Advanced" 
                          ? "85%" 
                          : lang.level === "Intermediate" 
                          ? "65%" 
                          : "40%" 
                      }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools and Technologies */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Laptop className="mr-3 text-primary" size={24} />
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>
            <ul className="space-y-3">
              {tools.map((tool, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{tool.name}</span>
                  <div className="w-1/2 bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ 
                        width: tool.level === "Advanced" 
                          ? "85%" 
                          : tool.level === "Intermediate" 
                          ? "65%" 
                          : "40%" 
                      }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Areas of Expertise */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <Database className="mr-3 text-primary" size={24} />
              <h3 className="text-xl font-semibold">Expertise</h3>
            </div>
            <ul className="space-y-4">
              {["Artificial Intelligence", "Machine Learning", "Robotics", "Data Analysis", "Web Development"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2 w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
