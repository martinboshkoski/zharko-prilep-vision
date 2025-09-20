import { Bot, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import aiAdvisorImage from '@/assets/ai-advisor.jpg';

const AIProjectSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Вештачки интелигентен агент",
      description: "Дигитален чувар на транспарентноста кој следи тендери, рокови и документи."
    },
    {
      icon: CheckCircle,
      title: "Точност и ред",
      description: "Автоматски организира податоци."
    },
    {
      icon: Bot,
      title: "Советување и надзор",
      description: "Укажува на ризици и непрецизности."
    },
    {
      icon: Users,
      title: "Поддршка и пристапност",
      description: "Овозможува брз пристап до информации за граѓаните."
    }
  ];

  return (
    <section id="ai-project" className="py-20 bg-campaign-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-text campaign-blue mb-6">
            АИ Советник за Транспарентен Прилеп
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Револуционерен проект кој ја користи вештачката интелигенција за 
            обезбедување на потполна транспарентност во општинската управа.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* AI Illustration */}
          <div className="relative slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-campaign-blue/20 to-accent/20 rounded-3xl transform -rotate-3"></div>
            <img 
              src={aiAdvisorImage}
              alt="АИ Советник - Дигитален чувар на транспарентноста"
              className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-card"
            />
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
              ИНОВАЦИЈА
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8 slide-up">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center slide-up">
          <div className="bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-semibold campaign-blue mb-4">
              Иднината на локалната самоуправа
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Со АИ Советникот, секој граѓанин ќе има пристап до сите општински информации 
              во реално време, што ќе обезбеди невидена транспарентност и одговорност.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProjectSection;