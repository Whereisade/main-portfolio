"use client";

import React, { useState } from "react";

export default function ContactSection({ profile }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      // ignore
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="glass rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-semibold">Let’s build something solid</h3>
        <p className="section-subtitle mt-3">
          If you have a project idea, contract role, or you just want to talk
          product — send a message. I reply fast.
        </p>

        <div className="mt-6 space-y-3 text-gray-100">
          <button
            type="button"
            onClick={copyEmail}
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            <span className="text-left min-w-0">
              <span className="block text-sm text-gray-300">Email</span>
              <span className="block font-medium truncate">{profile.email}</span>
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            <span className="text-left">
              <span className="block text-sm text-gray-300">GitHub</span>
              <span className="block font-medium">Whereisade</span>
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10">
              Open
            </span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
          >
            <span className="text-left">
              <span className="block text-sm text-gray-300">LinkedIn</span>
              <span className="block font-medium">fawaz adewuyi</span>
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-white/10">
              Open
            </span>
          </a>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-semibold">Send a message</h3>
        <p className="text-sm text-gray-300 mt-2">
          This form goes straight to my inbox.
        </p>

        <form
          className="mt-6 space-y-4"
          action={`https://formsubmit.co/${profile.email}`}
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New message from portfolio site"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-3 bg-black/30 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="px-4 py-3 bg-black/30 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-3 bg-black/30 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium shadow-lg shadow-blue-600/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
