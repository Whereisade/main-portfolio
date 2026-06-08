import React from "react";

export default function SkillsGrid({ groups = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {groups.map((g) => (
        <div key={g.title} className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">{g.title}</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {g.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
