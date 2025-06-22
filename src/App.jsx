import React, { useState, useEffect } from 'react';
import { Download, Star, Heart, Search, MapPin, Calendar, Users, Smartphone, CheckCircle, Github, Linkedin, Mail, Globe, Phone } from 'lucide-react';
import mockupImage from './assets/bookstay-mockup.png'; 

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-white font-bold text-xl">BookStay</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect
              <span className="text-blue-400 block">Stay</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover amazing hotels worldwide with our modern, intuitive mobile app. 
              Book your next adventure with ease and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-600/25">
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200">
                View Features
              </button>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 bg-blue-600/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              <div className="relative z-10 text-center">
                <img src={mockupImage} alt="Phone Mockup" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Search & Filtering",
      description: "Real-time hotel search with advanced filtering by price, location, and rating"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Favorites Management",
      description: "Save your favorite hotels with persistent storage across app sessions"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Hotel Discovery",
      description: "Browse top nearby hotels with location-based recommendations"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Seamless Booking",
      description: "Easy booking flow with trip management and booking history"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Reviews",
      description: "Read authentic reviews and ratings from verified guests"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Experience",
      description: "Modern UI with smooth animations and intuitive navigation"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="text-blue-400 block">Modern Travelers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to find, book, and manage your perfect hotel stay, 
            all in one beautifully designed mobile application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Download Section Component
const DownloadSection = () => {
  const stats = [
    { number: "10K+", label: "Hotels Listed" },
    { number: "50K+", label: "Happy Users" },
    { number: "4.8", label: "App Rating" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <section id="download" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="text-blue-400 block">Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Join thousands of travelers who trust BookStay for their accommodation needs. 
            Download now and discover your next perfect stay.
          </p>
          
          <div className="flex justify-center mb-12">
            <a 
              href="https://bookstay.omeshapasan.site"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl font-bold text-lg flex items-center space-x-3 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-blue-600/25"
            >
              <Download className="w-6 h-6" />
              <span>Download BookStay APK</span>
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Tech Stack Component
const TechStackSection = () => {
  const technologies = [
    "React Native",
    "Expo",
    "React Navigation",
    "Context API",
    "Vector Icons",
    "Material Design"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Built with Modern
            <span className="text-blue-400 block">Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Developed using cutting-edge technologies to ensure optimal performance, 
            security, and user experience across all devices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "omeshapasan@gmail.com",
      link: "mailto:omeshapasan@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Omesha Pasan",
      link: "https://www.linkedin.com/in/omesha-pasan-1503a5292"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@omeshapasan2",
      link: "https://github.com/omeshapasan2"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Portfolio",
      value: "portfolio.omeshapasan.site",
      link: "https://portfolio.omeshapasan.site"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+94787386042",
      link: "tel:+94787386042"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get in
            <span className="text-blue-400"> Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about BookStay or want to collaborate? 
            I'd love to hear from you. Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex items-center space-x-4 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 group"
              >
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-gray-400 text-sm">{contact.label}</div>
                  <div className="text-white font-medium">{contact.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-white font-bold text-xl">BookStay</span>
          </div>
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2024 BookStay. Developed by Omesha Pasan.</p>
            <p className="text-sm">Licensed under MIT License</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;