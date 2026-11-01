import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Screens from './components/Screens.jsx';
import UserGuide from './components/UserGuide.jsx';
import SetupGuide from './components/SetupGuide.jsx';
import Download from './components/Download.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Screens />
        <UserGuide />
        <SetupGuide />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
