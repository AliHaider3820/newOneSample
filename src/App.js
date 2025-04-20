import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ServicesSection from './components/ServicesSection';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <main className="main-content">
          {/* <ServicesSection /> */}
          <Routes>
            <Route path="/" element={<ServicesSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
