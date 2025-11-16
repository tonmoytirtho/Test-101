
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    Products: ["Motorcycle", "3-Wheeler", "EV Tyres", "LCV", "Farm/Tiller"],
    Company: ["About Us", "Our Mission", "Manufacturing", "Careers", "News"],
    Support: ["Contact Us", "Dealer Locator", "FAQs", "Warranty", "Downloads"],
    Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Disclaimer"],
  };

  return (
    <footer className="bg-zess-footer-bg text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
             <h2 className="text-3xl font-bold font-heading text-white">ZESS TYRE</h2>
             <p className="mt-4 text-gray-400">
                Engineered for the Roads That Matter.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-4">
              <div>
                <p className="font-bold text-white font-heading">Products</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {footerLinks.Products.map(link => <li key={link}><a href="#" className="text-gray-400 transition hover:text-white">{link}</a></li>)}
                </ul>
              </div>
              <div>
                <p className="font-bold text-white font-heading">Company</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {footerLinks.Company.map(link => <li key={link}><a href="#" className="text-gray-400 transition hover:text-white">{link}</a></li>)}
                </ul>
              </div>
              <div>
                <p className="font-bold text-white font-heading">Support</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {footerLinks.Support.map(link => <li key={link}><a href="#" className="text-gray-400 transition hover:text-white">{link}</a></li>)}
                </ul>
              </div>
              <div>
                <p className="font-bold text-white font-heading">Legal</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {footerLinks.Legal.map(link => <li key={link}><a href="#" className="text-gray-400 transition hover:text-white">{link}</a></li>)}
                </ul>
              </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} ZESS TYRE. All rights reserved.</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs sm:mt-0">
                <li><a href="#" className="text-gray-500 transition hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 transition hover:text-gray-400">Terms of Use</a></li>
                <li><a href="#" className="text-gray-500 transition hover:text-gray-400">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
