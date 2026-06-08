"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "design", label: "UI/UX" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ name = "Finding Fawaz", cvHref = "#" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const ids = useMemo(() => links.map((l) => l.id), []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.35] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  const navItem = (id, label) => (
    <a
      key={id}
      href={id === "home" ? "#home" : `#${id}`}
      className={`px-3 py-2 rounded-full text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500/60 ${
        active === id
          ? "bg-white/10 text-white"
          : "text-gray-200 hover:text-white hover:bg-white/5"
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="glass rounded-full px-5 md:px-6 py-2.5 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold tracking-wide text-white/95 hover:text-white transition"
        >
          {name}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => navItem(l.id, l.label))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm font-medium shadow-lg shadow-blue-600/20"
          >
            Let’s talk
          </a>
          <a
            href={cvHref}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition text-sm font-medium"
            download
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 glass rounded-2xl p-3">
          <div className="flex flex-wrap gap-2">
            {links.map((l) => navItem(l.id, l.label))}
          </div>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <a
              href="#contact"
              className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Let’s talk
            </a>
            <a
              href={cvHref}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition text-sm font-medium text-center"
              download
              onClick={() => setOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}
      </div>
    </motion.nav>
  );
}
