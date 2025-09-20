import { Award, Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const qualities = [
    {
      icon: Award,
      title: "Искуство",
      description: "Долгогодишно искуство во приватниот сектор"
    },
    {
      icon: Users,
      title: "Заедништво",
      description: "Активен член на заедницата со силна поврзаност со граѓаните"
    },
    {
      icon: Lightbulb,
      title: "Иновации",
      description: "Визионер за модерни технолошки решенија во управувањето"
    },
    {
      icon: Target,
      title: "Резултати",
      description: "Фокусиран на конкретни и мерливи резултати за граѓаните"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-text campaign-blue mb-6">
            За кандидатот
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Biography */}
          <div className="slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold campaign-blue mb-6">
                Жарко Бошкоски
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                Жарко Бошкоски е роден и израснат во Прилеп, град кој го носи во своето срце и визија. 
                Со долгогодишно менаџерско искуство во осигурителната индустрија, тој знае како да создава стабилност и развој. 
                Во младоста го претставувал Прилеп во шах на највисоко ниво, а како член на Ротари активно работи на иницијативи за подобар град. 
                Со љубов кон технологијата и бизнисот, Жарко е подготвен да донесе чесно, модерно и транспарентно управување со Прилеп.
                </p>
                
                <p>
                  Неговата визија за Прилеп е градот да стане пример за другите општини во Македонија 
                  - транспарентен, технолошки напреден и еколошки одржлив.
                </p>
                
                <p>
                  Со силна вера во моќта на технологијата и иновациите, Жарко верува дека секој 
                  граѓанин заслужува пристап до квалитетни услуги и транспарентна управа.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium campaign-blue">
                    Либерална Демократска Партија - ЛДП
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Qualities */}
          <div className="space-y-6 slide-up">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-card hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold campaign-blue mb-2">
                      {quality.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {quality.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-16 text-center slide-up">
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4">
              "Заедно кон поуспешен и позелен Прилеп"
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Мојата мисија е да го направам Прилеп град каде што секој граѓанин се чувствува 
              горд на својот дом и каде што иднината е светла за сите.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;