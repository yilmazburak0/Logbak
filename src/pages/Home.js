import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import About from '../components/About';
import OurSoftware from '../components/OurSoftware';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <OurSoftware/>
            <Services />
            <About/>
            <ContactSection />
            <Footer />
        </>

    )
}

export default Home;

