
import React, { useState } from 'react';
import { CATALOG_PAGES, PDF_CATALOG_URL } from '../../constants';

const Catalog: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0); 

  const goToPrev = () => {
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : CATALOG_PAGES.length - 1));
  };

  const goToNext = () => {
    setCurrentPageIndex((prev) => (prev < CATALOG_PAGES.length - 1 ? prev + 1 : 0));
  };

  const currentPage = CATALOG_PAGES[currentPageIndex];

  return (
    <section 
      id="catalog-page" 
      className="py-12 md:py-16 min-h-screen"
      style={{ background: 'linear-gradient(to right, #F7F2EE, #F2E2D5)' }}
    >
      <div className="max-w-[95%] mx-auto px-5">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold text-[#8C7E74] mb-8 uppercase tracking-widest">
          <span className="opacity-50">Trang chủ</span>
          <i className="fa-solid fa-chevron-right text-[8px] opacity-30"></i>
          <span className="text-[#513C2E]">Catalog</span>
        </nav>

        {/* Catalog Viewer Container - Restoring the "Spread" Look */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-stone-200 rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex items-center justify-center border border-white/50">
            
            {/* Blurred Background - Using current page image */}
            <div 
              key={`bg-${currentPage.id}`}
              className="absolute inset-0 z-0 opacity-40 blur-3xl scale-125 transition-all duration-1000"
              style={{ 
                backgroundImage: `url(${currentPage.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>

            {/* Content Page (The Book) */}
            <div className="relative z-10 w-[94%] h-[90%] bg-white shadow-2xl flex overflow-hidden rounded-sm">
              {/* Full Image Content - No more text/tables */}
              <div className="w-full h-full relative group overflow-hidden bg-white">
                <img 
                  key={currentPage.id}
                  src={currentPage.imageUrl} 
                  alt={currentPage.title} 
                  className="w-full h-full object-contain animate-page-flip"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/1200x800?text=VietPlywood+Catalog+Page+' + currentPage.id;
                  }}
                />
                
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/[0.03] via-transparent to-black/[0.03]"></div>
                
                {/* Subtle Spine shadow in the middle to mimic a book spread */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/10 hidden md:block"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent -ml-8 hidden md:block"></div>
              </div>

              {/* Branding Overlays on the Book */}
              <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur rounded font-bold text-[10px] text-[#513C2E] uppercase tracking-widest shadow-sm">
                <span>VietPlywood</span>
                <span className="opacity-30">|</span>
                <span className="text-[#B1967F]">Page {currentPage.id}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute left-4 md:left-8 z-20 w-10 md:w-14 h-10 md:h-14 bg-white/90 text-[#513C2E] rounded-full flex items-center justify-center hover:bg-[#513C2E] hover:text-white transition-all shadow-xl active:scale-95"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-4 md:right-8 z-20 w-10 md:w-14 h-10 md:h-14 bg-white/90 text-[#513C2E] rounded-full flex items-center justify-center hover:bg-[#513C2E] hover:text-white transition-all shadow-xl active:scale-95"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* Page Counter UI */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-white/90 px-6 py-2 rounded-full shadow-lg border border-gray-100">
               <span className="text-[10px] font-black text-[#513C2E] tracking-widest">GALLERY</span>
               <div className="h-4 w-[1px] bg-gray-200"></div>
               <span className="text-sm font-bold text-[#B1967F]">{currentPage.id} <span className="text-gray-300 font-normal mx-1">/</span> 14</span>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-20 max-w-4xl mx-auto bg-[#513C2E] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Tải xuống Catalogue đầy đủ</h3>
            <p className="text-white/70 text-sm">Lưu trữ bản PDF chất lượng cao để xem ngoại tuyến bất cứ lúc nào.</p>
          </div>
          <a 
            href={PDF_CATALOG_URL}
            download
            className="relative z-10 px-10 py-5 bg-[#B1967F] hover:bg-white hover:text-[#513C2E] text-white font-bold rounded-xl transition-all flex items-center gap-3 whitespace-nowrap shadow-xl uppercase tracking-widest text-xs"
          >
            <i className="fa-solid fa-download"></i> Tải Catalogue PDF
          </a>
          {/* Abstract pattern bg */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
        </div>
      </div>
      <style>{`
        @keyframes pageFlip {
          0% { opacity: 0; transform: perspective(1000px) rotateY(-5deg); }
          100% { opacity: 1; transform: perspective(1000px) rotateY(0deg); }
        }
        .animate-page-flip {
          animation: pageFlip 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Catalog;
