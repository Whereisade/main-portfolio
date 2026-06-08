"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // ensure body has class during mount (in case server-side didn't add it)
    document.body.classList.add("preloader-active");

    const timer = setTimeout(() => {
      const el = document.getElementById("preloader-overlay");
      if (el) el.classList.add("preloader-fadeout");
      setTimeout(() => {
        // remove body class so page becomes visible
        document.body.classList.remove("preloader-active");
        setVisible(false);
      }, 700);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader-overlay" aria-hidden="true" className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="preloader-layer">
        <div className="blob one" aria-hidden="true"></div>
        <div className="blob two" aria-hidden="true"></div>
      </div>

      <div className="text-center relative px-6">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold preloader-title preloader-font">
          Meet Fawaz
        </h1>
        <div className="preloader-subtitle">Fullstack Web Developer & Designer</div>
      </div>
    </div>
  );
}
