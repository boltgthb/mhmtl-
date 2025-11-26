import { Image, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const galleryItems = [
    { id: 1, caption: 'Köy Manzarası' },
    { id: 2, caption: 'Kışın Mahmatlı' },
    { id: 3, caption: 'Yayla Yolu' },
    { id: 4, caption: 'Köy Meydanı' },
    { id: 5, caption: 'Evlerden Görünüm' },
    { id: 6, caption: 'Doğal Yaşam' },
  ];

  const openLightbox = () => {
    setLightboxOpen(true);
    setZoom(1);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoom(1);
  };

  const handleZoom = () => {
    setZoom(prev => (prev === 1 ? 2 : 1));
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <>
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
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={openLightbox}
              >
                <div className="aspect-[4/3] bg-cover bg-center relative overflow-hidden group-hover:bg-gray-100" style={{ backgroundImage: `url('/mahmatli-koy-manzarasi.JPG')` }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-center font-medium text-gray-800">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-screen flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <button
              onClick={handleZoom}
              className="absolute bottom-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-colors backdrop-blur-sm"
              aria-label="Zoom"
            >
              <ZoomIn size={24} />
            </button>

            <div className="overflow-auto max-h-screen max-w-4xl">
              <img
                src="/mahmatli-koy-manzarasi.JPG"
                alt="Gallery lightbox"
                className="w-full h-auto transition-transform duration-300"
                style={{ transform: `scale(${zoom})` }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
