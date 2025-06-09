import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            {t('services.title')}
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            {t('services.subtitle')}
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  {t('services.cards.panel.title')}
                </h2>
                <p className="text-md font-medium">
                  {t('services.cards.panel.description')}
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img3}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  {t('services.cards.chatbot.title')}
                </h2>
                <p className="text-md font-medium">
                  {t('services.cards.chatbot.description')}
                </p>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img2}
                />
                <h2 className="font-semibold my-4 text-2xl text-center">
                  {t('services.cards.platform.title')}
                </h2>
                <div className="text-md font-medium flex flex-col space-y-2">
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.hardware')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.ports')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.commandLine')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.anomaly')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.log')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.ai')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.users')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.platform.features.reporting')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
              <div className="m-2 text-justify text-sm">
                <img
                  alt="card img"
                  className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out"
                  src={img4}
                />
                <h2 className="font-semibold my-4 text-2xl text-center ">
                  {t('services.cards.smart.title')}
                </h2>
                <p className="text-md font-medium">
                  {t('services.cards.smart.description')}
                </p>
                <div className="mt-4 text-md font-medium flex flex-col space-y-2">
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.smart.benefits.less')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.smart.benefits.faster')}
                  </p>
                  <p>
                    <span className="text-blue-600 mr-2">&#9733;</span>
                    {t('services.cards.smart.benefits.efficient')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;