
import React from 'react';
import { ArrowRightIcon } from './icons';

interface SolutionCardProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, imageUrl, altText }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-premium">
    <img src={imageUrl} alt={altText} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 text-white">
      <h3 className="font-heading text-3xl font-bold">{title}</h3>
      <p className="mt-2 max-w-sm">{description}</p>
      <a href="#" className="mt-4 inline-flex items-center font-semibold text-zess-orange group-hover:underline">
        Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Dealers",
      description: "Partner with ZESS to provide your customers with high-quality, reliable tyres. Benefit from our extensive support and marketing programs.",
      imageUrl: "https://picsum.photos/seed/tyreDealerShop/800/600",
      altText: "Tyre dealership workshop with racks of tyres",
    },
    {
      title: "Distributors & Export",
      description: "Expand your portfolio with our comprehensive product range. We offer robust logistical support for national and international distribution.",
      imageUrl: "https://picsum.photos/seed/tyreExport/800/600",
      altText: "Tyres stacked on export pallets in a warehouse",
    },
    {
      title: "OEMs",
      description: "We are a trusted partner for Original Equipment Manufacturers, providing tyres engineered to meet specific vehicle performance standards.",
      imageUrl: "https://picsum.photos/seed/tyreOEM/800/600",
      altText: "Tyres being installed on vehicles on an OEM assembly line",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-zess-heading sm:text-5xl">Solutions for Every Business</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
