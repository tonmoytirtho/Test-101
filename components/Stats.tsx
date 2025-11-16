
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="font-heading text-4xl sm:text-6xl font-bold text-zess-orange">{value}</p>
    <p className="mt-2 text-lg text-gray-300">{label}</p>
  </div>
);

const Stats: React.FC = () => {
  const stats = [
    { value: "25+", label: "Years of Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "10M+", label: "Tyres Produced Annually" },
    { value: "99.8%", label: "Quality Assurance Rate" },
  ];

  return (
    <section className="bg-zess-heading py-20 lg:py-28">
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
