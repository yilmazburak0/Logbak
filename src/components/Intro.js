import React from 'react';
import img from '../images/Web-developer.svg';
import { useTranslation } from 'react-i18next';

const Intro = () => {
    const { t } = useTranslation();
    
    return (
      <>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="fade-up">
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <img alt="card img" className="rounded-t float-right" src={img} />
            </div>
            <div
              className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
              data-aos="zoom-in"
              data-aos-delay="500">
              <h3 className="text-3xl text-blue-900 font-bold">
                {t('intro.title')}
              </h3>
              <div>
                <p className="my-4 text-xl text-gray-600 font-semibold">
                  {t('intro.description')}
                </p>
              </div>

              <div>
                <p className="my-3 text-xl text-gray-900 font-semibold">
                  {t('intro.features')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Intro;