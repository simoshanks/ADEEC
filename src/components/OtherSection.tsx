import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Smartphone, Brain, Shield, Megaphone, Hourglass } from 'lucide-react';

const OtherSection = () => {
  const programs = [
    {
      icon: Code,
      title: "Projet1",
      description: "projet1 description"
    },
    {
      icon: Database,
      title: "Projet2",
      description: "projet2 description"
    },
    {
      icon: Brain,
      title: "Projet3",
      description: "projet3 description"
    }

  ];

  return (
    <section id="programs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <span className="bg-gradient-primary bg-clip-text text-transparent">Projets test</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit illum incidunt nulla alias explicabo eaque dicta rerum numquam quaerat hic voluptatum, fugit harum reiciendis exercitationem quod officiis nesciunt ipsa!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;

            // Vérifie si c'est le dernier élément ET que le nombre total est impair
            const isLast = index === programs.length - 1;
            const isOdd = programs.length % 2 !== 0;

            return (
              <Card
                key={index}
                className={`group hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 bg-card border-border/50 hover:border-primary/50 ${isLast && isOdd ? "lg:col-span-2" : ""}`}

              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{program.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-glow-primary transition-all duration-300"
                  >
                    Voir détails
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>


        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
            Voir tous les projets 
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OtherSection;
