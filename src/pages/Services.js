import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Professional web development services using modern technologies',
      icon: '💻',
      category: 'Development',
      tags: ['Web', 'Frontend', 'Backend', 'Full Stack']
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Custom mobile application development for iOS and Android',
      icon: '📱',
      category: 'Development',
      tags: ['Mobile', 'iOS', 'Android', 'React Native']
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      icon: '☁️',
      category: 'Cloud',
      tags: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies',
      icon: '📈',
      category: 'Marketing',
      tags: ['SEO', 'SEM', 'Social Media', 'Analytics']
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Modern and user-friendly interface design solutions',
      icon: '🎨',
      category: 'Design',
      tags: ['UI', 'UX', 'Prototyping', 'Wireframing']
    },
    {
      id: 6,
      title: 'SEO Optimization',
      description: 'Search engine optimization for better online visibility',
      icon: '🎯',
      category: 'Marketing',
      tags: ['SEO', 'Keywords', 'Ranking', 'Content']
    },
    {
      id: 7,
      title: 'Social Media Management',
      description: 'Professional social media marketing and management',
      icon: '👥',
      category: 'Marketing',
      tags: ['Social Media', 'Content', 'Analytics', 'Engagement']
    },
    {
      id: 8,
      title: 'Content Creation',
      description: 'High-quality content creation for all platforms',
      icon: '📝',
      category: 'Content',
      tags: ['Writing', 'Video', 'Graphics', 'Strategy']
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Discover our comprehensive range of professional services</p>
      </div>

      <div className="services-filters">
        <div className="search-container">
          <input 
            type="text" 
            className="search-input"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="clear-search"
              onClick={() => setSearchQuery('')}
            >
              ×
            </button>
          )}
        </div>

        <div className="category-filter">
          <select 
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Development">Development</option>
            <option value="Cloud">Cloud</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Content">Content</option>
          </select>
        </div>
      </div>

      <div className="services-grid">
        {filteredServices.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-meta">
              <span className="service-category">{service.category}</span>
              <div className="service-tags">
                {service.tags.map((tag, index) => (
                  <span key={index} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
        {filteredServices.length === 0 && (
          <div className="no-results">
            <p>No services found matching "{searchQuery}"</p>
          </div>
        )}
      </div>

      <div className="cta-section">
        <h2>Need Help Finding the Right Service?</h2>
        <p>Contact us today to learn more about our services</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </div>
    </div>
  );
};

export default Services;