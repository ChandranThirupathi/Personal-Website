
import { useState } from "react";
import { Book, FileCode, BadgeCheck } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CertificationType = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: "book" | "badge-check" | "file-code";
};

const Certifications = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const certifications: CertificationType[] = [
    {
      id: 1,
      title: "JLPT N4",
      issuer: "Japan Foundation",
      date: "July 2024",
      description: "Japanese Language Proficiency Test Level N4 certification, demonstrating intermediate ability in reading, writing, and comprehension of Japanese language.",
      icon: "book"
    },
    {
      id: 2,
      title: "IBM Certified Business Intelligence and AI Analyst",
      issuer: "IBM",
      date: "March 2024",
      description: "Certification for professionals who analyze business data and implement AI solutions to derive insights and support decision-making processes.",
      icon: "badge-check"
    },
    {
      id: 3,
      title: "IBM Data Exploration Certification",
      issuer: "IBM",
      date: "January 2024",
      description: "Validates expertise in data exploration techniques, data quality assessment, and preparation of datasets for analytical purposes.",
      icon: "badge-check"
    },
    {
      id: 4,
      title: "NPTEL Certified Computer Graphics",
      issuer: "NPTEL",
      date: "November 2023",
      description: "Comprehensive certification covering fundamentals of computer graphics, rendering techniques, and practical applications in visualization.",
      icon: "file-code"
    },
    {
      id: 5,
      title: "NPTEL Certified Ethical Hacking",
      issuer: "NPTEL",
      date: "September 2023",
      description: "Certification in ethical hacking methodologies, security testing, and vulnerability assessment to protect systems from cyber threats.",
      icon: "file-code"
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "book":
        return <Book size={24} className="text-primary" />;
      case "badge-check":
        return <BadgeCheck size={24} className="text-primary" />;
      case "file-code":
        return <FileCode size={24} className="text-primary" />;
      default:
        return <BadgeCheck size={24} className="text-primary" />;
    }
  };

  return (
    <section id="certifications" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="transition-all duration-300 hover:shadow-md border-[1px] cursor-pointer"
              onClick={() => toggleExpand(cert.id)}
            >
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  {getIcon(cert.icon)}
                </div>
                <div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className={expandedId === cert.id ? "block" : "hidden"}>
                <p className="mb-4 text-muted-foreground">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="font-normal">
                    {cert.issuer}
                  </Badge>
                  <Badge variant="outline" className="font-normal">
                    {cert.date}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2 w-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(cert.id);
                  }}
                >
                  {expandedId === cert.id ? "Show Less" : "Show More"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
