import { Mountain } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center pt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/69129735_1197565680447583_3429571234562572288_n.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-x5"></div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-primary-400 rounded-full mb-6 sm:mb-8">
          <Mountain className="text-white" size={40} />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
          Mahmatlı Köyü'ne
          <br />
          <span className="text-primary-700">Hoş Geldiniz</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
          Gümüşhane'nin Kelkit ilçesine bağlı, doğası ve insanı ile tanınan küçük ama samimi bir köy: Mahmatlı.
          Hem köyde yaşayanlar hem de gurbetteki hemşerilerimiz için dijital bir buluşma noktası.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <button
            onClick={() => scrollToSection('#hakkinda')}
            className="w-full sm:w-auto px-8 py-3 bg-primary-400 text-white rounded-lg font-medium hover:bg-primary-500 transition-colors shadow-lg hover:shadow-xl"
          >
            Köy Hakkında
          </button>
          <button
            onClick={() => scrollToSection('#galeri')}
            className="w-full sm:w-auto px-8 py-3 bg-white text-primary-700 border-2 border-primary-400 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Galeriye Göz At
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
