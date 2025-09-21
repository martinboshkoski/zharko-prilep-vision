import { Phone, Mail, Globe } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "070 488 001",
      href: "tel:070488001"
    },
    {
      icon: Mail,
      label: "Е-пошта",
      value: "zharko@zharkozaprilep.mk",
      href: "mailto:zharko@zharkozaprilep.mk"
    },
    // {
    //   icon: Globe,
    //   label: "Веб-страница",
    //   value: "zharkozaprilep.mk",
    //   href: "https://zharkozaprilep.mk"
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-text text-primary-foreground mb-6">
            Контакт
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Контактирајте не за прашања, предлози или поддршка
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div 
                key={index}
                className="text-center slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary-foreground mb-3">
                    {contact.label}
                  </h3>
                  
                  <a 
                    href={contact.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-lg"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional message */}
        <div className="mt-16 text-center slide-up">
          <div className="bg-primary-foreground/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-primary-foreground mb-4">
              Заедно кон подобар Прилеп
            </h3>
            <p className="text-primary-foreground/80">
              Вашиот глас е важен. Придружете ни се во мисијата за создавање на 
              модерен, транспарентен и зелен Прилеп за сите граѓани.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;