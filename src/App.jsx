import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Links from './components/Links';
import Footer from './components/Footer';
import Window from './components/ui/Window';

import "./App.css" ;
export default function App() {
  return (
    <div className='bg-background text-foreground
     min-h-screen  flex items-center justify-center' >
      <Window>
        <Header />
        <About />
        <Education />
        <Links />
        <Footer />
      </Window>
    </div>
  );
}
