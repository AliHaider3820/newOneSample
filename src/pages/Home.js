import React from 'react';
import './Home.css';
import ServicesSection from '../components/ServicesSection';
const Home = () => {
  return (

    <div className="home-page">
      {/* <ServicesSection /> */}
      <section className="hero">
        <h1>Welcome to Our Services Directory</h1>
        <p>Find the best services for your needs</p>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h2>Professional Services</h2>
          <p>Connect with verified professionals</p>
        </div>
        <div className="feature-card">
          <h2>Easy Search</h2>
          <p>Quickly find what you need</p>
        </div>
        <div className="feature-card">
          <h2>24/7 Support</h2>
          <p>Always available when you need us</p>
        </div>
      </section>
    </div>
  );
};

export default Home;