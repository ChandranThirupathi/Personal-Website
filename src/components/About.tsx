
const About = () => {
  return (
    <section id="about" className="bg-secondary/20">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Chandran T, an aspiring AI & Robotics enthusiast pursuing B.Tech in Artificial Intelligence 
              and Data Science at M. Kumarasamy College of Engineering. Passionate about building intelligent 
              systems that solve real-world problems, I specialize in developing AI-driven solutions and 
              autonomous robots. With hands-on experience in machine learning, full-stack development, and 
              data analytics, I thrive in collaborative environments that push the boundaries of innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">M. Kumarasamy College of Engineering</h4>
                <span className="text-muted-foreground">2022 - 2026</span>
              </div>
              <p className="text-primary font-medium">B.Tech AI & Data Science</p>
              <p className="text-sm text-muted-foreground">GPA 7.9/10</p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Karpaga Vinayaga Hr. Sec. School</h4>
                <span className="text-muted-foreground">2022</span>
              </div>
              <p className="text-primary font-medium">Computer Science & Math</p>
              <p className="text-sm text-muted-foreground">89%</p>
            </div>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">Certifications</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>JLPT N4</li>
              <li>IBM Certified Business Intelligence and AI Analyst</li>
              <li>NPTEL Certified Computer Graphics and Ethical Hacking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
