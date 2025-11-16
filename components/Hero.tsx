
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/tyreFactoryLine/2560/1080"
          alt="Tyre manufacturing production line"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-6xl">
            Tyres Engineered for the Roads That Matter.
          </h1>

          <p className="mt-4 max-w-lg text-gray-200 sm:text-xl/relaxed">
            At ZESS, we combine cutting-edge technology with rigorous testing to produce tyres that deliver unparalleled performance, safety, and durability for every journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded-md bg-zess-orange px-12 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500 focus:outline-none focus:ring sm:w-auto"
            >
              Enquire Now
            </a>

            <a
              href="#"
              className="block w-full rounded-md border border-white px-12 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-zess-heading focus:outline-none focus:ring sm:w-auto"
            >
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
