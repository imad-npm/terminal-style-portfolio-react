import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Links from './components/Links';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Window from './components/ui/Window';
import FadeIn from './components/ui/FadeIn';

import "./App.css" ;

export default function App() {
  return (
    <div className='bg-background text-foreground
     min-h-screen  flex items-center justify-center' >
      <Window>
        <Header />
        <FadeIn>
          <Links />
        </FadeIn>
           <FadeIn>
          <Contact />
        </FadeIn>
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Education />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Languages />
        </FadeIn>
     
        <FadeIn>
          <Footer />
        </FadeIn>
      </Window>
    </div>
  );
}
