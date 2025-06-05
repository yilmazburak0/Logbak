import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Home from './pages/Home';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Logbak - Your Logbook");

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </I18nextProvider>
  );
}

export default App;