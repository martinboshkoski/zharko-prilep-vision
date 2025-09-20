import { Car, Heart, Leaf, Wifi, Bike } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: Car,
      title: "Возачка за млади",
      description: "Општината ќе ги финансира часовите за возачка дозвола за сите млади од 18 години.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Heart,
      title: "Атлетска патека со справи на кеј",
      description: "Од мостот Табана до мостот кај Димо Наредникот.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Leaf,
      title: "Зелен и чист Прилеп",
      description: "10 нови мерни станици за квалитет на воздух, нови зелени површини, 10 км велосипедски патеки, субвенции за еколошки грејни единици.",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      icon: Wifi,
      title: "ИТ Гнездо",
      description: "Бесплатен современ простор за ИТ фриленсери, стартапи и креативци со интернет, конференц сала и обуки.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Bike,
      title: "Нови 10 км велосипедска патека",
      description: "Нови безбедни патеки по главните улици.",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-text campaign-blue mb-6">
            Клучни Проекти
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Конкретни решенија за подобар живот на граѓаните во Прилеп
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="card-text campaign-blue mb-3 font-semibold">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Yellow accent line */}
                <div className="mt-4 h-1 w-12 bg-accent rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center slide-up">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold campaign-blue mb-4">
              Сите проекти се планирани да бидат реализирани во првите две години од мандатот
            </h3>
            <p className="text-muted-foreground">
              Со јасен план, временска рамка и буџет за секој проект
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;