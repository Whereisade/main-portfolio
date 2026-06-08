"use client";

import React, { useMemo, useState } from "react";
import Snowfall from "react-snowfall";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import SectionShell from "./components/SectionShell";
import SkillsGrid from "./components/SkillsGrid";
import ProjectCard from "./components/ProjectCard";
import Timeline from "./components/Timeline";
import ContactSection from "./components/ContactSection";

import {
  profile,
  skills,
  featuredProjects,
  designProjects,
  branding,
  experience,
  certifications,
  education,
} from "./data/portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  const [filter, setFilter] = useState("All");

  const filters = ["All", "Fullstack", "Frontend", "Backend"];

  const filteredProjects = useMemo(() => {
    if (filter === "All") return featuredProjects;
    return featuredProjects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(147,51,234,0.12),transparent_55%)]" />
      <div className="fixed inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Snowfall stays */}
      <Snowfall
        snowflakeCount={90}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-blue-600/90 z-[60]"
      />

      <Navbar name="FINDING FAWAZ" cvHref={profile.cvFile} />

      {/* Hero */}
      <SectionShell id="home" className="pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-blue-300 font-medium tracking-wide">
              {profile.location}
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              {profile.name}
              <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300">
                {profile.role}
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200/90 leading-relaxed">
              {profile.heroIntro}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#work"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium shadow-lg shadow-blue-600/20 text-center"
              >
                View featured work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition font-medium text-center"
              >
                Contact me
              </a>
              <a
                href={profile.cvFile}
                className="px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition font-medium text-center"
                download
              >
                My CV
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {profile.highlights.map((h) => (
                <div key={h.label} className="glass rounded-2xl p-4">
                  <p className="text-xs text-gray-300">{h.label}</p>
                  <p className="mt-1 font-semibold">{h.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass rounded-3xl p-6 md:p-7">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={profile.headshot}
                    alt={profile.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Quick links</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition text-sm"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 transition text-sm"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-300">What I do</p>
                <div className="mt-3 grid grid-cols-1 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="font-semibold">Fullstack development</p>
                    <p className="text-sm text-gray-300 mt-1">
                      Secure APIs, RBAC, dashboards, and offline-aware workflows.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="font-semibold">UI/UX design</p>
                    <p className="text-sm text-gray-300 mt-1">
                      Product flows, wireframes, prototypes and design systems.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <p className="font-semibold">Production deployment</p>
                    <p className="text-sm text-gray-300 mt-1">
                      AWS/Vercel/Render pipelines, performance optimization and QA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionShell>

      {/* About */}
      <SectionShell id="about" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          <div className="lg:col-span-5">
            <h2 className="section-title">About</h2>
            <p className="section-subtitle mt-4">{profile.about}</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-300">Email</p>
                <p className="font-semibold mt-1">{profile.email}</p>
              </div> */}
              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-300">Phone</p>
                <p className="font-semibold mt-1">{profile.phone}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-semibold">How I work</h3>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Ship with clarity",
                    text: "I translate requirements into clean UI and maintainable code with clear boundaries and reusable components.",
                  },
                  {
                    title: "Design for reality",
                    text: "Performance and low-bandwidth usability are first-class. Great UX should work anywhere.",
                  },
                  {
                    title: "Security mindset",
                    text: "RBAC, audits, and careful auth flows especially for healthcare-like data.",
                  },
                  {
                    title: "Fast iteration",
                    text: "Short feedback loops, small releases, and consistent UI systems for speed.",
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-white/10 bg-black/25 p-5"
                  >
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </SectionShell>

      {/* Skills */}
      <SectionShell id="skills" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="section-title">Skills & Tools</h2>
              <p className="section-subtitle mt-3 max-w-3xl">
                A practical stack for building modern products — from UI and
                APIs to deployment.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <SkillsGrid groups={skills} />
          </div>
        </motion.div>
      </SectionShell>

      {/* Work */}
      <SectionShell id="work" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="section-title">Featured work</h2>
              <p className="section-subtitle mt-3 max-w-3xl">
                A mix of fullstack, frontend and backend builds — focused on
                real-world usability.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm border transition ${
                    filter === f
                      ? "bg-blue-600 border-blue-500/40"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </motion.div>
      </SectionShell>

      {/* Design */}
      <SectionShell id="design" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">UI/UX & Branding</h2>
          <p className="section-subtitle mt-3 max-w-3xl">
            Product thinking, clean interfaces, and brand assets.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {designProjects.map((d) => (
              <a
                key={d.title}
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  {d.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-blue-300">
                  <span>View</span>
                  <span aria-hidden>→</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold">Brand & logo design</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {branding.map((b) => (
                <a
                  key={b.title}
                  href={b.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition group"
                >
                  <div className="relative h-52">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold">{b.title}</h4>
                    <p className="text-gray-300 mt-2 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionShell>

      {/* Experience */}
      <SectionShell id="experience" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <h2 className="section-title">Experience</h2>
              <p className="section-subtitle mt-3 max-w-2xl">
                Roles where I combined product thinking, UI craft, and backend
                delivery.
              </p>
              <div className="mt-10">
                <Timeline items={experience} />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold">Certifications</h3>
                <ul className="mt-4 space-y-2 text-gray-200/90">
                  {certifications.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold">Education</h3>
                <ul className="mt-4 space-y-2 text-gray-200/90">
                  {education.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold">Availability</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Open to remote roles, contract work, and product collaborations.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionShell>

      {/* Contact */}
      <SectionShell id="contact" className="py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle mt-3 max-w-3xl">
            Let’s talk about your project, your app idea, or your team’s next
            feature.
          </p>

          <div className="mt-10">
            <ContactSection profile={profile} />
          </div>
        </motion.div>
      </SectionShell>

      <footer className="relative z-10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
