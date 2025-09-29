import { Bot, Shield, Users, FileText, Eye, Scale, Clock, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aiAdvisorImage from '@/assets/ai-advisor.jpg';
import aiAdvisorGovernmentImage from '@/assets/ai-advisor-government.jpg';

const AIAgent = () => {
  const phases = [
    {
      title: "Прва фаза: АИ агент за општински процедури",
      description: "АИ агентот ќе биде обучен на сите процедури, прашања и податоци поврзани со процедурите за добивање на било каква одлука, уверение и сл. издадени од Општината Прилеп.",
      features: [
        "Обучен на јавната документација",
        "Одговори на прашања за кои сега треба да се закажува средба",
        "Пример: Какви објекти можам да градам на оваа парцела - АИ агентот ќе одговори врз основа на урбанистичкото планирање"
      ],
      icon: FileText,
      bgColor: "bg-blue-50"
    },
    {
      title: "Втора фаза: АИ агент за јавни набавки",
      description: "Агентот ќе биде обучен на правилата и документацијата за јавни набавки и може целосно да подготви тендерска документација.",
      features: [
        "Обучен на правилата за јавни набавки",
        "Подготовка на целосна тендерска документација",
        "Водење на секоја јавна набавка или вработување",
        "Извештај од АИ агентот за избор на директор на секоја институција за да се осигурам дека одлуката е донесена без корупција и во согласност со законот"
      ],
      icon: Scale,
      bgColor: "bg-green-50"
    },
    {
      title: "Трета фаза: АИ агент за активни процедури",
      description: "АИ агентот ќе може да одговори на граѓаните за документацијата за сите активни процедури - со ограничувања на приватноста на податоците.",
      features: [
        "Одговори само на граѓанинот вклучен во процедурата",
        "Специјален токен за идентификација",
        "Пристап до информации за активни процедури",
        "Почитување на приватноста на податоците"
      ],
      icon: Eye,
      bgColor: "bg-purple-50"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Тотално искоренување на корупцијата",
      description: "АИ агентот ja прави корупцијата технички невозможна - секоја одлука е документирана и законита."
    },
    {
      icon: Users,
      title: "Прилеп како лидер во Македонија",
      description: "Првиот град со прв АИ агент - Прилеп ќе стане модел за сите други градови."
    },
    {
      icon: Bot,
      title: "Крај на субјективноста",
      description: "АИ агентот ги применува правилата еднакво за сите - нема „врски“, нема „партија“ нема фаворизирање."
    },
    {
      icon: Clock,
      title: "10x побрзи процеси",
      description: "Она што денес трае недели, утре ќе трае минути. Прилеп ќе стане најефикасен град во Македонија. Дозволите конечно ќе се издаваат брзо, а со тоа ќе ја забрзаме и локалната економија."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-campaign-blue to-campaign-blue-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                АИ Агент за Сите Граѓани на Прилеп
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed mb-4">
                Основната политичка идеја на кандидатот - вештачки интелигентен агент
                кој ќе биде агент за сите граѓани на Прилеп
              </p>
              <div className="bg-campaign-yellow/20 border border-campaign-yellow/30 rounded-xl p-6 mt-6">
                <p className="text-lg font-semibold text-white">
                  🚀 Најбрзото решение за корупцијата • Прилеп назад на мапата на Македонија
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-campaign-yellow/30 to-accent/30 rounded-3xl transform rotate-3"></div>
              <img
                src={aiAdvisorImage}
                alt="АИ Агент за сите граѓани на Прилеп"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-campaign-blue mb-6">
              Најбрзиот пат кон искоренување на корупцијата кај Општинската администрација
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              АИ агентот е срцето на нашата политичка идеја - технологија во служба на граѓаните,
              транспарентност без компромиси и ефикасност која ги заслужуваат граѓаните на Прилеп.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-red-800 mb-3">⚡ Зошто АИ агентот е најбрзото решение?</h3>
              <p className="text-red-700">
                Додека други градови во Македонија напредуваат, Прилеп заостанува поради бавни процеси и нетранспарентност.
                АИ агентот ќе ги елиминира сите можности за корупција <strong>веднаш од првиот ден</strong> и ќе ги забрза
                процесите до ниво кое ќе го постави Прилеп како лидер во дигитализацијата во Македонија.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-campaign-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-campaign-blue" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-campaign-blue mb-6">
              Три фази до Прилеп - лидер град во Македонија
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              АИ агентот ќе се развива во три фази, секоја дизајнирана да ги елиминира различни видови корупција
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 max-w-3xl mx-auto">
              <p className="text-green-800 font-semibold text-center">
                🎯 Цел: Прилеп да стане првиот град во Македонија без корупција кај Општинската администрација
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className={`${phase.bgColor} rounded-2xl p-8 lg:p-12`}>
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-campaign-blue rounded-xl flex items-center justify-center mr-4">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-campaign-blue">{phase.title}</h3>
                      </div>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        {phase.description}
                      </p>
                      <ul className="space-y-3">
                        {phase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="relative">
                        <img
                          src={aiAdvisorGovernmentImage}
                          alt={`Илустрација за ${phase.title}`}
                          className="w-full h-64 object-cover rounded-xl shadow-lg"
                        />
                        <div className="absolute top-4 right-4 bg-campaign-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Фаза {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-campaign-blue mb-6">
              Како ќе се реализира?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="border-l-4 border-campaign-blue pl-6">
                  <h3 className="text-xl font-semibold mb-3">Обука на АИ агентот</h3>
                  <p className="text-muted-foreground">
                    Агентот ќе биде обучен на сите јавни документи, правилници, процедури и урбанистички планови на Општината Прилеп.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Безбедност и приватност</h3>
                  <p className="text-muted-foreground">
                    Системот ќе биде дизајниран со највисоки стандарди за безбедност и заштита на личните податоци на граѓаните.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-semibold mb-3">Континуирано подобрување</h3>
                  <p className="text-muted-foreground">
                    АИ агентот ќе се надградува континуирано со нови функционалности и подобрена точност на одговорите.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-campaign-blue/20 to-green-500/20 rounded-3xl transform rotate-3"></div>
              <img
                src={aiAdvisorGovernmentImage}
                alt="Имплементација на АИ агент"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-campaign-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Иднината на Прилеп започнува сега
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            АИ агентот е повеќе од технологија - тоа е симбол на нашата посветеност кон транспарентност,
            ефикасност и услуга во корист на секој граѓанин на Прилеп.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-lg text-blue-100">
              <strong className="text-white">Глас за транспарентност. Глас за иднината. Глас за Прилеп.</strong>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgent;