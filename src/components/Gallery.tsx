import { Image } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    { id: 1, caption: 'Köy Manzarası' },
    { id: 2, caption: 'Kışın Mahmatlı' },
    { id: 3, caption: 'Yayla Yolu' },
    { id: 4, caption: 'Köy Meydanı' },
    { id: 5, caption: 'Evlerden Görünüm' },
    { id: 6, caption: 'Doğal Yaşam' },
  ];

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-stone-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center mb-4">
          <Image className="text-primary-700 mr-3" size={36} />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fotoğraf Galerisi</h2>
        </div>
        <div className="w-20 h-1 bg-primary-400 mx-auto mb-4"></div>

        <p className="text-center text-gray-700 mb-10 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          Köyümüzün manzaraları, yaylalar, kış ve yaz fotoğrafları, düğünler ve bayramlardan kareler burada
          toplanacaktır.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-stone-200 flex items-center justify-center">
                <Image className="text-primary-700 opacity-30" size={64} />
              </div>
              <div className="p-4">
                <p className="text-center font-medium text-gray-800">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ); 
};

export default Gallery;
