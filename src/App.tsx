import { Header } from './components/Header';
import { Banner } from './components/Banner/';
import { Brands } from './components/Brands';
import { About } from './components/About';
import { Repositories } from './components/Repositories';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './index.css';
import { useRef } from 'react';
import { Experience } from './components/Experience';

function App() {

  const aboutRef = useRef<any>(null);
  const portifolioRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const portifolioScroll = () => portifolioRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  return (

    <div className='bg-black text-white '>
      <Header about={aboutScroll} portifolio={portifolioScroll} contact={contactScroll} />
      <div className='w-full max-w-[1500px] mx-auto'>
        <Banner />
      </div>
      <Brands />
      <div className='w-full max-w-[1500px] mx-auto'>
        <div ref={aboutRef} className="ref"></div>
        <About />
        <Experience />
        <div ref={portifolioRef} className="ref"></div>
        <Projects />
        <Repositories />
        <div ref={contactRef} className="ref"></div>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
