import ldpLogo from '@/assets/ldp-logo-transparent.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img 
            src={ldpLogo} 
            alt="ЛДП - Либерална Демократска Партија" 
            className="h-12 w-auto opacity-80"
          />
          
          {/* Candidate name */}
          <h3 className="text-xl font-semibold">
            Жарко Бошкоски за Градоначалник на Прилеп
          </h3>
          
          {/* Tagline */}
          <p className="text-center text-background/80 max-w-md">
            За модерен, зелен и транспарентен Прилеп
          </p>
          
          {/* Divider */}
          <div className="w-full h-px bg-background/20"></div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-background/60">
            <p>© 2025 Жарко Бошкоски. Сите права се задржани.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;