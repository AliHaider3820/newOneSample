import React from 'react';
import './ServicesSection.css';
import CategoryCard from './CategoryCard';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    const categories = [
        { 
            id: 1, 
            name: 'Healthcare', 
            icon: 'fas fa-hospital',
            image: 'images/healthcare.jpg',
            bgColor: '#E3F2FD',
            gradient: 'linear-gradient(135deg, #E3F2FD 0%, #90CAF9 100%)',
            iconColor: '#1976D2'
        },
        { 
            id: 2, 
            name: 'Education', 
            icon: 'fas fa-graduation-cap',
            image: 'images/education.jpg',
            bgColor: '#F3E5F5',
            gradient: 'linear-gradient(135deg, #F3E5F5 0%, #CE93D8 100%)',
            iconColor: '#7B1FA2'
        },
        { 
            id: 3, 
            name: 'Transportation', 
            icon: 'fas fa-car',
            image: 'images/transportation.jpg',
            bgColor: '#E8F5E9',
            gradient: 'linear-gradient(135deg, #E8F5E9 0%, #A5D6A7 100%)',
            iconColor: '#388E3C'
        },
        { 
            id: 4, 
            name: 'Food & Dining', 
            icon: 'fas fa-utensils',
            image: 'images/food.jpg',
            bgColor: '#FFF3E0',
            gradient: 'linear-gradient(135deg, #FFF3E0 0%, #FFB74D 100%)',
            iconColor: '#F57C00'
        },
        { 
            id: 5, 
            name: 'Entertainment', 
            icon: 'fas fa-film',
            image: 'images/entertainment.jpg',
            bgColor: '#FCE4EC',
            gradient: 'linear-gradient(135deg, #FCE4EC 0%, #F48FB1 100%)',
            iconColor: '#C2185B'
        },
        { 
            id: 6, 
            name: 'Professional Services', 
            icon: 'fas fa-briefcase',
            image: 'images/professional.jpg',
            bgColor: '#ECEFF1',
            gradient: 'linear-gradient(135deg, #ECEFF1 0%, #B0BEC5 100%)',
            iconColor: '#455A64'
        }
    ];

    const services = [
        { 
            id: 1, 
            name: 'Medical Consultation',
            category: 'Healthcare',
            description: '24/7 online medical consultation services with certified healthcare professionals',
            icon: 'fas fa-stethoscope',
            image: 'images/medical-consultation.jpg',
            rating: 4.8,
            reviews: 128,
            features: ['24/7 Availability', 'Video Consultations', 'Prescription Services'],
            price: 'From $49',
            badge: 'Popular'
        },
        { 
            id: 2, 
            name: 'Online Courses',
            category: 'Education',
            description: 'Access to premium educational content from world-class instructors',
            icon: 'fas fa-laptop',
            image: 'images/online-courses.jpg',
            rating: 4.9,
            reviews: 256,
            features: ['Self-paced Learning', 'Certificate Included', 'Expert Support'],
            price: 'From $29',
            badge: 'Best Seller'
        },
        { 
            id: 3, 
            name: 'Ride Sharing',
            category: 'Transportation',
            description: 'Safe and reliable on-demand transportation services available 24/7',
            icon: 'fas fa-taxi',
            image: 'images/ride-sharing.jpg',
            rating: 4.7,
            reviews: 512,
            features: ['Real-time Tracking', 'Secure Payments', 'Professional Drivers'],
            price: 'From $10',
            badge: 'Trusted'
        },
        { 
            id: 4, 
            name: 'Food Delivery',
            category: 'Food & Dining',
            description: 'Quick and reliable food delivery from your favorite local restaurants',
            icon: 'fas fa-hamburger',
            image: 'images/food-delivery.jpg',
            rating: 4.6,
            reviews: 384,
            features: ['Live Order Tracking', 'No Minimum Order', 'Special Offers'],
            price: 'From $0',
            badge: 'Fast Delivery'
        }
    ];
  return (
    <section className="services-section">
      <div className="container">
        <h1>Service Categories</h1>
        <div className="category-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <h1>Featured Services</h1>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;