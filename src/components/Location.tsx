import { MapPin, Navigation } from 'lucide-react';

const Location = () => {
  const locationInfo = [
    { label: 'İl', value: 'Gümüşhane' },
    { label: 'İlçe', value: 'Kelkit' },
    { label: 'Köy', value: 'Mahmatlı' },
    { label: 'Ulaşım', value: 'Kara yolu ile, özel araç veya ilçe minibüsleri' },
  ];

  return (
    <section id="ulasim" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="text-primary-700 mr-3" size={36} />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ulaşım ve Konum</h2>
        </div>
        <div className="w-20 h-1 bg-primary-400 mx-auto mb-8 sm:mb-12"></div>

        <div className="bg-stone-50 rounded-xl shadow-md p-6 sm:p-8 md:p-10">
          <p className="text-gray-700 leading-relaxed mb-8 text-base sm:text-lg">
            Mahmatlı Köyü, Gümüşhane ilinin Kelkit ilçesine bağlıdır. İlçe merkezine kara yolu ile ulaşım
            sağlanır. Köyümüze gelmek isteyenler, önce Kelkit'e ulaşıp oradan köy yolunu takip edebilirler.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {locationInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 sm:p-5 border border-primary-100 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-start">
                  <Navigation className="text-primary-700 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 border-l-4 border-primary-400 p-4 sm:p-6 rounded-r-lg">
            <p className="text-gray-700 text-sm sm:text-base">
              Yakında bu bölüme Google Haritalar konum linki eklenecektir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
