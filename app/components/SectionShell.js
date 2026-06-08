import React from "react";

export default function SectionShell({ id, children, className = "" }) {
  return (
    <section id={id} className={`relative z-10 px-6 md:px-10 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
