// src/App.jsx
import Header from './components/Header';
import About from './components/About';
import Links from './components/Links';
import Footer from './components/Footer';

import "./App.css" ;
export default function App() {
  return (
    <div className='bg-background text-foreground min-h-screen ' >
      <Header />
      <About />
      <Links />
      <Footer />
    </div>
  );
}
