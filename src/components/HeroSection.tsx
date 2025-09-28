import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const candidatePhoto = '/images/zb_image-removebg-preview.png';
import prilepBackground from '@/assets/prilep-background.jpg';

const HeroSection = () => {
  const slogans = [
    "За модерен, зелен и транспарентен Прилеп",
    "Чесност, Иновации и Развој за сите граѓани", 
    "Прилеп што му припаѓа на иднината"
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);

  const nextSlogan = () => {
    setCurrentSlogan((prev) => (prev + 1) % slogans.length);
  };

  const prevSlogan = () => {
    setCurrentSlogan((prev) => (prev - 1 + slogans.length) % slogans.length);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${prilepBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-campaign-blue/10 to-campaign-blue/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="hero-text campaign-blue mb-4">
              Жарко Бошкоски
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/80 mb-8">
              Кандидат за Градоначалник на Град Прилеп
            </h2>

            {/* Slogan Carousel */}
            <div className="relative mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <button 
                  onClick={prevSlogan}
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <div className="flex-1 max-w-xl">
                  <p className="text-xl lg:text-2xl font-semibold campaign-blue min-h-[3rem] flex items-center justify-center lg:justify-start">
                    "{slogans[currentSlogan]}"
                  </p>
                </div>
                
                <button 
                  onClick={nextSlogan}
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center lg:justify-start space-x-2 mt-4">
                {slogans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlogan(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlogan ? 'bg-accent w-6' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0">
                Градоначалник кој ќе ги користи најновите технологии за транспарентност,
                развој и подобар живот за сите граѓани на Прилеп.
              </p>
            </div>
          </div>

          {/* Candidate Photo */}
          <div className="flex justify-center lg:justify-end slide-up">
            <img
              src={candidatePhoto}
              alt="Жарко Бошкоски - Кандидат за Градоначалник"
              className="w-[30rem] h-[36rem] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;