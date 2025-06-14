import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../images/our-software.jpg';

const OurSoftware = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          {t('software.title')}
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-8">
        {/* Image section - left on desktop, top on mobile */}
        <div className="w-full md:w-2/3">
          <div className="rounded-lg shadow-md overflow-hidden">
            <img
              src={img}
              alt="Bear snowboarding with a server on its back"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text section - right on desktop, bottom on mobile */}
        <div className="w-full text-center md:text-left mt-6 md:mt-0">
          <p className="text-gray-700 text-lg lg:text-xl mb-3 xl:mb-4">
            {t('software.p1')}
          </p>
          <p className="text-gray-700 text-lg lg:text-xl mb-3 xl:mb-4">
            {t('software.p2')}
          </p>
          <p className="text-gray-700 text-lg lg:text-xl mb-3 xl:mb-4">
            {t('software.p3')}
          </p>
          <p className="text-gray-700 text-lg lg:text-xl mb-3 xl:mb-4">
            {t('software.p4')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurSoftware;