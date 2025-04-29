import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Skills data
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "SQL", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Python", level: 70 },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading the frontend development team, implementing modern React-based solutions and mentoring junior developers.",
    },
    {
      year: "2020 - 2023",
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      description:
        "Developed responsive web applications using React and Next.js, collaborated with UX/UI designers to create intuitive interfaces.",
    },
    {
      year: "2018 - 2020",
      title: "Web Developer",
      company: "Creative Web Studio",
      description:
        "Created websites for clients using HTML, CSS, JavaScript, and WordPress.",
    },
    {
      year: "2016 - 2018",
      title: "Computer Science Degree",
      company: "University of Technology",
      description:
        "Studied Computer Science with focus on web technologies and software engineering.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <motion.section
        className="mb-20 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-500 dark:border-blue-400">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          John Doe
        </h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">
          Full Stack Developer
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 7h-2v-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v3h-2v-6h2v1.28c.6-.85 1.67-1.28 2.7-1.28 1.88 0 3.3 1.42 3.3 3.3V17z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Passionate full-stack developer with over 5 years of experience
          building modern web applications. Specialized in React, Node.js, and
          cloud technologies. Dedicated to creating elegant, efficient, and
          user-friendly solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="mb-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-blue-600 dark:text-blue-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section initial="hidden" animate="visible" variants={fadeIn}>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Experience & Education
        </h2>
        <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-3 md:ml-6 pl-6 md:pl-8">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 relative">
              <div className="absolute -left-[42px] md:-left-[45px] w-7 h-7 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-3">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-md font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {item.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;
