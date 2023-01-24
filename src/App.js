import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/ContectUs/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HomeKitchen from './components/HomeKitchen/HomeKitchen';
import OurBlog from './components/OurBlog/OurBlog';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HomeKitchen />
      <OurBlog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
