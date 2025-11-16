
import React from 'react';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl, altText }) => (
  <div className="group flex flex-col items-center text-center bg-white rounded-lg shadow-premium p-6 transition-transform duration-300 hover:-translate-y-2">
    <div className="mb-4 h-32 w-32 flex items-center justify-center">
      <img src={imageUrl} alt={altText} className="max-h-full max-w-full object-contain" />
    </div>
    <h3 className="font-heading text-lg font-semibold text-zess-heading">{title}</h3>
  </div>
);

const ProductRange: React.FC = () => {
  const products = [
    { title: "Motorcycle Tyres", imageUrl: "https://picsum.photos/seed/motoTyre/400/300", altText: "Motorcycle Tyre" },
    { title: "3-Wheeler Tyres", imageUrl: "https://picsum.photos/seed/3WheelerTyre/400/300", altText: "3-Wheeler Tyre" },
    { title: "EV Tyres (E-Rickshaw)", imageUrl: "https://picsum.photos/seed/evRickshawTyre/400/300", altText: "EV Rickshaw Tyre" },
    { title: "LCV Tyres", imageUrl: "https://picsum.photos/seed/lcvTyre/400/300", altText: "Light Commercial Vehicle Tyre" },
    { title: "Farm/Tiller Tyres", imageUrl: "https://picsum.photos/seed/farmTyre/400/300", altText: "Agricultural Tiller Tyre" },
    { title: "Inner Tubes (HCV/LTB)", imageUrl: "https://picsum.photos/seed/innerTube/400/300", altText: "Inner Tube" },
    { title: "Allied Products", imageUrl: "https://picsum.photos/seed/alliedProducts/400/300", altText: "Allied Rubber Products" },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-zess-heading sm:text-5xl">Our Product Range</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
