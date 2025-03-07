import { Users, Award, Clock, PhoneCall, Handshake, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const CountUpAnimation = ({
  end,
  duration = 2000,
  shouldAnimate
}: {
  end: number;
  duration?: number;
  shouldAnimate: boolean;
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldAnimate) {
      setCount(end);
      return;
    }
    let startTime: number;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldAnimate]);
  return <>{count}</>;
};

const StatCard = ({
  icon: Icon,
  number,
  text,
  isVisible
}: {
  icon: any;
  number: string;
  text: string;
  isVisible: boolean;
}) => {
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const suffix = number.replace(/[0-9]/g, '');
  return <div className="text-center animate-fade-in animate-slide-in select-none">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-105 transition-transform duration-300">
        <Icon className="text-primary" size={32} />
      </div>
      <h3 className="text-3xl font-bold text-primary mb-2">
        <CountUpAnimation end={numericValue} shouldAnimate={isVisible} />
        {suffix}
      </h3>
      <p className="text-text">{text}</p>
    </div>;
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const stats = [{
    icon: Users,
    number: "10000+",
    text: "Clientes Satisfeitos"
  }, {
    icon: Award,
    number: "30+",
    text: "Anos de Experiência"
  }, {
    icon: Handshake,
    number: "20+",
    text: "Parcerias com as seguradoras"
  }, {
    icon: PhoneCall,
    number: "98+",
    text: "Taxa de Resolução"
  }];

  return <section id="sobre" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-3 animate-fade-in">Nossa Experiência em Números</h2>
        <p className="text-center text-gray-600 mb-12 text-lg animate-fade-in">Conheça nosso histórico de excelência e compromisso</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {stats.map((stat, index) => <StatCard key={index} {...stat} isVisible={isVisible} />)}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/sobre" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="outline" className="group text-lg">
              Saiba mais sobre nós
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};

export default Stats;
