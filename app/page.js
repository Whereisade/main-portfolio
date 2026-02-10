"use client";

import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";
import Header from "./components/Header";
import MyStack from "./components/MyStack";
import Image from "next/image";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-black">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            MEET FAWAZ
          </h1>
          <div className="mt-4">
            <motion.div
              className="w-16 h-1 bg-blue-500 mx-auto mt-2"
              initial={{ width: 0 }}
              animate={{ width: "10rem" }}
              transition={{ duration: 2.5 }}
            />
          </div>
        </motion.div>
      </div>
    );
  }

  const projects = [
    {
      title: "Omowunmi’s Kitchen",
      description:
        "Catering & Event Website built using Next.js and Tailwind CSS. Fully responsive with SEO best practices.",
      liveLink: "https://www.omowunmikitchen.com.ng/",
      tags: ["Next.js", "Tailwind CSS", "React"],
      image:
        "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865533/Screenshot_2025-03-13_122528_ts8cij.png",
    },
    {
      title: "Omowunmi Kitchen Booking Management System",
      description:
        "Dynamic booking system with token-based authentication and PDF generation, integrated with Django REST API.",
      liveLink: "https://wunmi-books.vercel.app/",
      githubLink: "https://github.com/Whereisade/wunmi-books-admin",
      tags: ["Next.js", "Tailwind CSS", "Django REST"],
      image:
        "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865532/Screenshot_2025-03-13_123149_bvci9m.png",
    },
    {
      title: "NIEMR",
      description:
        "Niemr is an EMR system designed for Nigerian healthcare settings with limited connectivity. It supports hospital, provider, and patient logins with role-based workflows, clinical notes, lab/pharmacy integration, and secure audit trails. Key features include in-app notifications, global search, color-coded abnormal results, and bulk data uploads via CSV.",
      liveLink: "https://niemr-webapp.vercel.app/",
      tags: ["Next.js", "Responsive", "SEO"],
      image:
        "https://res.cloudinary.com/ddrylpaqx/image/upload/v1769200863/Screenshot_2026-01-23_195120_ilabk1.png",
    },
    {
      title: "Ori-Ire Hospital Website",
      description:
        "Healthcare facility website featuring interactive sections, SEO optimization, and appointment forms.",
      liveLink: "https://healthcare-eta-liard.vercel.app/",
      tags: ["Next.js", "Responsive", "SEO"],
      image:
        "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865533/Screenshot_2025-03-13_122555_gg08lw.png",
    },
    {
      title: "Omowunmi Kitchen Booking API",
      description:
        "RESTful API built with Django REST Framework for managing nested booking data and dynamic fee calculations.",
      liveLink: "https://wunmi-books.onrender.com/",
      githubLink: "https://github.com/Whereisade/Wunmi-books-api",
      tags: ["Django", "DRF", "PostgreSQL"],
      image:
        "https://res.cloudinary.com/ddrylpaqx/image/upload/v1741865747/Gemini_Generated_Image_xi5iquxi5iquxi5i_lr2whu.jpg",
    },
  ];

  const uiuxProjects = [
    {
      title: "FlexBuy (E-commerce Web App)",
      description:
        "Designed an intuitive e-commerce experience with advanced search filters, smooth cart/checkout flow, and a cohesive design system using Figma.",
      link: "https://www.figma.com/proto/c4vgxKau729Dgks2HhD2xJ/Flex-Buy?page-id=50%3A2&node-id=113-31&p=f&viewport=75%2C310%2C0.27&t=akTBxQTPwU2nHdDm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=52%3A756&show-proto-sidebar=1",
    },
    {
      title: "BodySync (Fitness Mobile App)",
      description:
        "Created a user-friendly fitness platform enabling gym location, trainer connection, and workout plans using thorough user research and Figma prototyping.",
      link: "https://www.figma.com/proto/nHXnJC8vMI3lnGtaO1n20A/BodySync-Design?page-id=1%3A2&node-id=368-1506&p=f&viewport=582%2C107%2C0.04&t=Jyu7gBy7N38UnP7e-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=368%3A1506",
    },
    {
      title: "LaHome (iOS Hotel Booking App)",
      description:
        "Designed an elegant hotel booking app interface optimized for iOS following Apple's Human Interface Guidelines.",
      link: "https://www.figma.com/design/H1yPof8Dibx0jVOSY6VlwC/Lahome?node-id=1-356&t=L1ISyTzqNfu4ak24-1",
    },
    {
      title: "CareBridge (Healthcare Website Design)",
      description:
        "Crafted a professional healthcare website with a strong visual hierarchy, intuitive service presentation, and user-friendly appointment interface using Figma.",
      link: "https://www.figma.com/design/c4vgxKau729Dgks2HhD2xJ/Flex-Buy?node-id=443-3654&t=1Fny4Q49sEYaZNdZ-1",
    },
    {
      title: "Omowunmi’s Kitchen Website (UI Design)",
      description:
        "Developed responsive service-oriented web UI designs for a catering and event brand, creating wireframes and a design system that reflects brand identity and readability.",
      link: "https://www.figma.com/design/c4vgxKau729Dgks2HhD2xJ/Flex-Buy?node-id=443-3654&t=1Fny4Q49sEYaZNdZ-1",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Snowfall
        snowflakeCount={100}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />

      <Header />

      <header className="h-screen flex items-center justify-center relative z-10 px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Welcome to Fawaz's Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 mb-8">
            Fullstack Web Developer & UI/UX Designer
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 rounded-full text-white font-medium hover:bg-blue-600 transition shadow-lg hover:shadow-blue-400/30"
          >
            View My Work
          </a>
          <a
            href="https://docs.google.com/document/d/1So28wMeH4fdnVfLTVCK46hPScnjB0SG-2apk1tBVoiY/edit?usp=sharing"
            className="px-8 py-3 bg-blue-500 rounded-full text-white font-medium hover:bg-blue-600 transition shadow-lg hover:shadow-blue-400/30"
          >
            My CV
          </a>
          </div>
        </motion.div>
      </header>

      <section
        id="about"
        className="py-24 px-6 md:px-24 bg-gray-800/50 relative z-10"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0 overflow-hidden">
              <Image
                src="https://res.cloudinary.com/ddrylpaqx/image/upload/v1741866256/q_fqd1dr.jpg"
                alt="fawaz adewuyi"
                width={192}
                height={192}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                I'm a versatile and detail-oriented Fullstack Web Developer and
                UI/UX Designer with a strong foundation in both frontend and
                backend development. I specialize in building scalable,
                responsive, and high-performance web applications using modern
                technologies like React, Next.js, and Tailwind CSS. On the
                backend, I work with Django and Django REST Framework to create
                clean, maintainable code and secure authentication systems. I'm
                also passionate about crafting intuitive, user-centered digital
                experiences with Figma and deploying production-ready projects
                using Vercel and Render.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section>
        <MyStack />
      </section>

      <section id="projects" className="py-24 px-6 md:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition group"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-900/30 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-500 rounded-lg text-sm hover:bg-blue-600 transition"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="uiux" className="py-24 px-6 md:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            UI/UX Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {uiuxProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition group"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-500 rounded-lg text-sm hover:bg-blue-600 transition"
                  >
                    View Design
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="py-24 px-6 md:px-24 bg-gray-800/50 relative z-10"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">
            Experience & Education
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">
              Fullstack Developer Intern – Univelcity, Lagos, Nigeria
              </h3>
              <p className="text-gray-300">
              Developed responsive web apps with React, Next.js, Tailwind CSS, Python, and Django, ensuring cross-device usability. Built secure RESTful APIs and integrated PostgreSQL for efficient data management. Translated Figma designs into functional interfaces and collaborated in agile teams to deliver features on tight deadlines. Gained experience with Git, Vercel, and Render for version control and deployment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Fullstack Developer – Omowunmi Kitchen, Lagos, Nigeria
              </h3>
              <p className="text-gray-300">
                Designed and implemented responsive web applications using
                React, Next.js, and Tailwind CSS on the frontend paired with
                Python and Django on the backend. Collaborated with
                cross-functional teams to deliver end-to-end solutions in an
                agile environment.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Junior Product Engineer – Reispar Technologies, Lagos, Nigeria
              </h3>
              <p className="text-gray-300">
              Led end-to-end product design for integrating B2B features into a B2C app, aligning user experience with business goals. Conducted user and stakeholder research, identified pain points, and designed unified user flows. Delivered wireframes and high-fidelity prototypes in Figma for responsive web. Collaborated with product and engineering teams in agile sprints, iterated based on feedback, and validated designs through usability testing and cross-functional critiques.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>
                  Fullstack Web Development Certificate – Univelcity (2025)
                </li>
                <li>Google Project Management Certificate – Coursera (2024)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Education</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>B.Sc. Accounting – Babcock University, Ogun, Nigeria</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="contact"
        className="py-24 px-6 md:px-24 bg-gray-800/50 relative z-10"
      >
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <p className="text-xl mb-8">
            Feel free to reach out. I'm open to new opportunities!
          </p>

          <div className="bg-gray-900/70 p-8 rounded-xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <a
                href="mailto:fawazadewuyi23@gmail.com"
                className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>fawazadewuyi23@gmail.com</span>
              </a>

              <a
                href="https://github.com/Whereisade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/fawaz-adewuyi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <form
              className={
                'flex flex-col gap-4 w-full action="https://formsubmit.co/fawazadewuyi23@gmail.com" method="POST"'
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 px-6 text-center text-gray-400 relative z-10">
        <div className="max-w-6xl mx-auto">
          <p>
            © {new Date().getFullYear()} Adewuyi Adeleke Fawaz. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
