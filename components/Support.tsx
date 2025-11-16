
import React from 'react';

const Support: React.FC = () => {
  const supportItems = [
    { title: "Tyre Care & Safety", imageUrl: "https://picsum.photos/seed/tyreSidewall/300/200", altText: "Close-up of tyre sidewall inspection" },
    { title: "Fitment & Rotation", imageUrl: "https://picsum.photos/seed/tyreFitment/300/200", altText: "Technician fitting a tyre" },
    { title: "FAQs", imageUrl: "https://picsum.photos/seed/tyreIcon/300/200", altText: "Tyre icon" },
    { title: "Warranty & Claims", imageUrl: "https://picsum.photos/seed/tyreTread/300/200", altText: "Tyre tread close-up" },
    { title: "Download Centre", imageUrl: "https://picsum.photos/seed/tyreDocs/300/200", altText: "Tyre documentation thumbnail" },
  ];

  return (
    <section className="bg-zess-section-bg py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="bg-white rounded-lg shadow-premium overflow-hidden">
            <img src="https://picsum.photos/seed/dealerExterior/800/500" alt="Tyre dealership exterior" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="font-heading text-3xl font-bold text-zess-heading">Dealer Locator</h3>
              <p className="mt-4 text-zess-body">Find your nearest authorized ZESS TYRE dealer for professional service and expert advice.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <input type="text" placeholder="Enter your city or pin code" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-zess-orange focus:border-zess-orange" />
                <button className="bg-zess-orange text-white font-semibold px-8 py-3 rounded-md hover:bg-orange-500 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold text-zess-heading mb-8">Support & Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportItems.map((item) => (
                <a href="#" key={item.title} className="block group bg-white rounded-lg p-6 shadow-premium transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-full h-24 rounded-md overflow-hidden mb-4">
                     <img src={item.imageUrl} alt={item.altText} className="w-full h-full object-cover"/>
                  </div>
                  <h4 className="font-heading text-md font-semibold text-zess-heading group-hover:text-zess-orange transition-colors">{item.title}</h4>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Support;
