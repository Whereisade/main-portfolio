import React from "react";

export default function Timeline({ items = [] }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
      <div className="space-y-6">
        {items.map((it, idx) => (
          <div key={`${it.title}-${idx}`} className="relative pl-12">
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-blue-600/90 border border-white/15 shadow-lg shadow-blue-600/20" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold">{it.title}</h3>
                <p className="text-sm text-blue-300">{it.company}</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-200/90">
                {it.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
