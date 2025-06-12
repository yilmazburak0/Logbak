import React from 'react';
import { useTranslation } from 'react-i18next';
import missionImg from '../images/mission.jpg';
import visionImg from '../images/vision.jpg';
import servicesImg from '../images/services.jpg';

const About = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'mission',
      title: t('services.mission.title'),
      text: t('services.mission.description'),
      img: missionImg,
    },
    {
      id: 'vision',
      title: t('services.vision.title'),
      text: t('services.vision.description'),
      img: visionImg,
    },
    {
      id: 'services',
      title: t('services.services.title'),
      text: t('services.services.description'),
      img: servicesImg,
    },
  ];

  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {t('navbar.about')}
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
          </div>
        </div>

        <div className="space-y-16">
          {sections.map((section, idx) => (
            <div 
              key={section.id}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 md:gap-12`}
              data-aos={idx % 2 !== 0 ? 'fade-left' : 'fade-right'}
              data-aos-delay="200"
            >
              <div className="w-full lg:w-1/2">
                <img 
                  src={section.img} 
                  alt={section.title} 
                  className="w-full max-w-md mx-auto rounded-lg shadow-md transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{section.title}</h3>
                {section.items ? (
                  <ul className="text-gray-700 text-lg leading-relaxed space-y-2">
                    {Array.isArray(section.items) ? (
                      section.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{section.items}</span>
                      </li>
                    )}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-lg leading-relaxed">{section.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;