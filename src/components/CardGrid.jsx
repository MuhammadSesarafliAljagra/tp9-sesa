// src/components/CardGrid.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CardGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(6);

  const projectData = [
    {
      id: 1,
      title: "Modern E-Commerce Dashboard",
      body: "A complete admin dashboard for managing online store inventory, orders, and customer data with real-time analytics.",
      image:
        "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg",
      category: "Web Development",
      timeToRead: "7 min read",
    },
    {
      id: 2,
      title: "Financial Analytics Platform",
      body: "Advanced data visualization tools for financial markets with AI-powered predictions and trend analysis.",
      image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg",
      category: "Data Science",
      timeToRead: "6 min read",
    },
    {
      id: 3,
      title: "Social Media Mobile App",
      body: "Cross-platform mobile application for connecting professionals within the same industry, with messaging and event features.",
      image:
        "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
      category: "Mobile Dev",
      timeToRead: "4 min read",
    },
    {
      id: 4,
      title: "Machine Learning Image Classifier",
      body: "Custom machine learning model that classifies product images for e-commerce platforms with 97% accuracy.",
      image:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      category: "AI & ML",
      timeToRead: "8 min read",
    },
    {
      id: 5,
      title: "Healthcare Patient Portal",
      body: "Secure patient management system allowing users to schedule appointments, access medical records, and communicate with providers.",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      category: "Web App",
      timeToRead: "5 min read",
    },
    {
      id: 6,
      title: "Real-time Collaboration Tool",
      body: "Cloud-based workspace for teams to collaborate on documents, manage projects, and track progress with real-time updates.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      category: "SaaS",
      timeToRead: "6 min read",
    },
    {
      id: 7,
      title: "Smart Home IoT System",
      body: "Complete IoT ecosystem for controlling home devices with voice commands, automation rules, and energy consumption monitoring.",
      image:
        "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
      category: "IoT",
      timeToRead: "7 min read",
    },
    {
      id: 8,
      title: "Blockchain Trading Platform",
      body: "Secure cryptocurrency exchange platform with multi-factor authentication and real-time market data integration.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
      category: "Blockchain",
      timeToRead: "9 min read",
    },
    {
      id: 9,
      title: "Augmented Reality Product Viewer",
      body: "Mobile application that allows customers to visualize products in their own space using AR technology before purchasing.",
      image:
        "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg",
      category: "AR/VR",
      timeToRead: "5 min read",
    },
    {
      id: 10,
      title: "E-Learning Platform",
      body: "Comprehensive online learning system with interactive courses, progress tracking, and certification for various subjects.",
      image:
        "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg",
      category: "EdTech",
      timeToRead: "6 min read",
    },
    {
      id: 11,
      title: "Restaurant Management System",
      body: "All-in-one solution for restaurants to manage orders, inventory, staff, and customer relationships with POS integration.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      category: "Business",
      timeToRead: "5 min read",
    },
    {
      id: 12,
      title: "Travel Planning Application",
      body: "AI-powered trip planner that creates personalized itineraries based on user preferences, budget, and travel dates.",
      image:
        "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg",
      category: "Travel",
      timeToRead: "4 min read",
    },
    {
      id: 13,
      title: "Fitness Tracking Wearable",
      body: "Complete hardware and software solution for tracking workouts, monitoring health metrics, and providing personalized coaching.",
      image:
        "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
      category: "Health Tech",
      timeToRead: "7 min read",
    },
    {
      id: 14,
      title: "Smart City Infrastructure",
      body: "Urban planning and monitoring system using IoT sensors to optimize traffic, reduce energy usage, and improve public services.",
      image:
        "https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg",
      category: "Smart City",
      timeToRead: "8 min read",
    },
    {
      id: 15,
      title: "Digital Marketing Dashboard",
      body: "Comprehensive analytics platform for tracking campaigns across multiple channels with ROI calculation and audience insights.",
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
      category: "Marketing",
      timeToRead: "5 min read",
    },
  ];

  useEffect(() => {
    // Simulate API loading and replace with our custom data
    const loadData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setPosts(projectData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load projects");
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, posts.length));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {posts.slice(0, visiblePosts).map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div
              className="relative overflow-hidden"
              style={{ paddingBottom: "60%" }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  // Fallback image if loading fails
                  e.target.src =
                    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg";
                }}
              />
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            <div className="p-5">
              <h2 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-100 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                {post.body}
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center space-x-1 text-sm font-medium">
                  <span>View Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-xs">{post.timeToRead}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {visiblePosts < posts.length && (
        <div className="mt-12 text-center">
          <button
            onClick={loadMore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg font-medium"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardGrid;
