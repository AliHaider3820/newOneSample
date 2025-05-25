import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: '🔍' },
    { id: 'plumbing', name: 'Plumbing', icon: '🚰' },
    { id: 'electrical', name: 'Electrical', icon: '⚡' },
    { id: 'food', name: 'Food', icon: '👨‍🍳' },
    { id: 'painting', name: 'Painting', icon: '🎨' },
    { id: 'cleaning', name: 'Cleaning', icon: '🧹' },
  ];

  const featuredServices = [
    {
      id: 1,
      title: 'Plumbing Services',
      description: 'Expert plumbing solutions for your home',
      icon: '🚰',
      color: '#E3F2FD',
      category: 'Plumbing'
    },
    {
      id: 2,
      title: 'Electrical Work',
      description: 'Professional electrical services',
      icon: '⚡',
      color: '#F3E5F5',
      category: 'Electrical'
    },
    {
      id: 3,
      title: 'Food Catering',
      description: 'Delicious catering for all events',
      icon: '👨‍🍳',
      color: '#FFF3E0',
      category: 'Food'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/services', { 
      state: { 
        searchQuery, 
        category: selectedCategory 
      } 
    });
  };

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Our Services Directory</h1>
        <p>Find the best services for your needs</p>
        
        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-bar">
              <input
                type="text"
                placeholder="What service are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </div>
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  type="button"
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className="category-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </form>
        </div>
      </section>
      
      <section className="featured-services">
        <h2>Featured Services</h2>
        <div className="services-grid">
          {featuredServices.map(service => (
            <Link to="/services" key={service.id} className="service-card" style={{ backgroundColor: service.color }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="category-tag">{service.category}</span>
              <span className="view-more">View Details →</span>
            </Link>
          ))}
        </div>
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