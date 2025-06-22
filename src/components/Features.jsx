import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Heart, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Filter,
  Smartphone,
  Shield,
  Clock,
  Navigation,
  Zap
} from 'lucide-react';

// Hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

// Individual Feature Card Component
const FeatureCard = ({ feature, index, isInView }) => {
  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transform transition-all duration-700 hover:border-blue-500/50 group ${
        isInView 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {feature.description}
      </p>
      {feature.badge && (
        <span className="inline-block mt-4 px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
          {feature.badge}
        </span>
      )}
    </div>
  );
};

// Main Features Component
const FeaturesComponent = () => {
  const [headerRef, headerInView] = useInView(0.3);
  const [featuresRef, featuresInView] = useInView(0.1);

  // Core Features Data
  const coreFeatures = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Search & Filtering",
      description: "Real-time hotel search with instant results and advanced filtering by price, location, category, and rating with smart suggestions.",
      badge: "AI Powered"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Favorites Management",
      description: "Add and remove hotels from favorites with beautiful heart animations and persistent storage across all your app sessions.",
      badge: "Sync Enabled"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location-Based Discovery",
      description: "Browse top nearby hotels with intelligent location-based recommendations and detailed area information.",
      badge: "GPS Ready"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Seamless Booking System",
      description: "Streamlined hotel booking flow with comprehensive trip management, booking history, and instant confirmations.",
      badge: "Instant Book"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Reviews & Ratings",
      description: "Read authentic reviews and ratings from verified guests with detailed feedback and photo galleries.",
      badge: "Verified"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium User Experience",
      description: "Modern Material Design UI with smooth animations, micro-interactions, and consistent typography throughout.",
      badge: "Award Winning"
    }
  ];

  // Additional Features Data (removed Integrated Messaging and Secure Payments)
  const additionalFeatures = [
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Category Browsing",
      description: "Popular, Modern, Beach, Mountain, Luxury, Budget"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Optimized for all screen sizes and orientations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Protection",
      description: "Your privacy and data security guaranteed"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Easy Navigation",
      description: "Intuitive bottom tab navigation system"
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transform transition-all duration-1000 ${
            headerInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need for
            <span className="text-blue-400 block mt-2">Perfect Travel</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover, book, and manage your perfect hotel stays with our comprehensive suite of 
            modern features designed for today's smart travelers.
          </p>
        </div>

        {/* Core Features Grid */}
        <div ref={featuresRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isInView={featuresInView}
            />
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            And Much More...
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-blue-500/50 group ${
                  featuresInView 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;