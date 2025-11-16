
import React from 'react';
import { TyreIcon } from './icons';

const Manufacturing: React.FC = () => {
    const features = ["Advanced R&D", "Rigorous Testing", "Global Certifications", "Comprehensive Warranty"];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="h-[600px] rounded-lg overflow-hidden shadow-premium">
            <img 
              src="https://picsum.photos/seed/tyreLab/800/900" 
              alt="Tyre testing lab with advanced machinery"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-zess-orange font-semibold">Our Commitment</span>
            <h2 className="mt-2 font-heading text-4xl font-bold text-zess-heading sm:text-5xl">
              Excellence in Quality & Manufacturing
            </h2>
            <p className="mt-6 text-lg text-zess-body">
              Every ZESS tyre is a product of relentless innovation and precision engineering. Our state-of-the-art manufacturing facilities adhere to the strictest international standards, utilizing advanced robotics and quality control systems. From raw material inspection to the final curing process, we ensure every tyre meets our benchmark for safety, performance, and longevity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {features.map(feature => (
                <div key={feature} className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-zess-body">
                  <TyreIcon className="h-5 w-5 text-zess-orange"/>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a 
                href="#"
                className="inline-block rounded-md bg-zess-orange px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500 focus:outline-none focus:ring"
              >
                Discover Our Process
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
