import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Rocket } from 'lucide-react';

import { Briefcase, Globe, School, Store, CalendarDays } from "lucide-react";

const ConfianceSection = () => {
    // data/domains.ts

    const domains = [
        {
            icon: Briefcase,
            title: "titre1",
            description: "some textte of title 1.",
        },
        {
            icon: Globe,
            title: "titre2",
            description: "some textte of title 2.",
        },
        {
            icon: School,
            title: "titre3",
            description: "some textte of title 3",
        }
    ];


    return (

        <section className="py-20 relative overflow-hidden bg-background">


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-primary bg-clip-text text-transparent">Why choose us</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis alias, exercitationem totam illo, debitis et autem molestiae voluptas aliquid corporis quod nesciunt quos vel eligendi sed cum tempore nostrum quisquam.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {domains.map((domain, index) => {
                        const Icon = domain.icon;
                        return (
                            <Card
                                key={index}
                                className="text-center group hover:shadow-tech transition-all duration-300 transform hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50"
                            >
                                <CardContent className="p-6">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-glow-primary">
                                        <Icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {domain.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {domain.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>

    );
};

export default ConfianceSection;