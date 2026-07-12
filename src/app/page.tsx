"use client";

import { useTheme } from "@/app/providers"; // Updated import path
import ThemeSwitcher from "@/components/ThemeSwitcher";
import {
  ExternalLink,
  Mail,
  Code2,
  GraduationCap,
  Briefcase,
  Download,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react"; // Added hooks for hydration guard

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR"
  >("IDLE"); // Add this state

  useEffect(() => {
    setMounted(true);
  }, []);

  // Force the theme to remain 'dark' until mounting is complete to prevent layout shifting
  const isSaas = mounted && theme === "saas";

  // ... rest of your styles and configurations can stay exactly the same
  // Dynamic style configurations based on the layout theme switcher
  const styles = {
    card: isSaas
      ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-purple-500/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/15"
      : "bg-[#121212] border border-zinc-800 rounded-lg p-6 transition-all duration-300 hover:border-zinc-500",
    badge: isSaas
      ? "bg-purple-500/20 text-purple-200 border border-purple-400/30 text-xs px-3 py-1 rounded-full font-medium"
      : "bg-zinc-800 text-zinc-300 text-xs px-2 py-1 rounded font-mono border border-zinc-700",
    primaryBtn: isSaas
      ? "bg-white text-indigo-900 font-semibold px-6 py-3 rounded-full shadow-lg shadow-white/20 hover:bg-opacity-95 flex items-center gap-2 transition-all"
      : "bg-zinc-100 text-black font-mono font-medium px-6 py-3 rounded-md hover:bg-zinc-200 flex items-center gap-2 transition-all",
    secondaryBtn: isSaas
      ? "border border-white/40 text-white backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/10 flex items-center gap-2 transition-all"
      : "border border-zinc-700 text-zinc-300 font-mono px-6 py-3 rounded-md hover:border-zinc-500 flex items-center gap-2 transition-all",
    textMuted: isSaas
      ? "text-purple-100/80"
      : "text-zinc-400 font-mono text-sm",
    sectionHeading: isSaas
      ? "text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent mb-8 flex items-center gap-3"
      : "text-2xl font-bold tracking-tight text-white font-mono mb-8 flex items-center gap-3 border-b border-zinc-800 pb-2",
  };

  const projects = [
    {
      title: "Envirr Institute LMS",
      description:
        "A comprehensive Learning Management System designed to streamline educational workflows. Features secure student authentication, organized resource distribution, and video lecture archiving.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
      live: "https://envirr-institute.vercel.app/",
      github: "https://github.com/ArnavKumar055/Envirr-Institute",
    },
    // {
    // title: "Community Matchmaking Application",
    //description:
    //  "A niche matrimonial platform tailored for specialized community matchmaking. Built with complex registration pipelines, multi-step verification forms, and robust relational database structures.",
    //tech: ["MongoDB", "Express", "React", "Node.js", "Redux Toolkit"],
    //live: "https://vercel.app",
    //github: "https://github.",
    //type: "Backend Focus",
    //},
    {
      title: "Scientefic Calculator Web App",
      description:
        "A web app for various calculations including graphing, expression expansion and simplification, etc. Also, an EMI and SIP calculator and a live currency convertor which refreshes every hour.",
      tech: ["JavaScript", "TypeScript", "HTML5 Canvas", "Tailwind CSS"],
      live: "https://sc-calculator.vercel.app/",
      github: "https://github.com/ArnavKumar055/SC-Calculator",
      type: "Client-Side (SPA)",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 relative">
      <ThemeSwitcher />

      {/* Hero Section */}
      <section className="my-16 md:my-28 flex flex-col items-start gap-6 max-w-3xl">
        {isSaas && (
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wide uppercase text-pink-200 animate-pulse">
            <Sparkles size={12} /> Available for Junior Developer Roles
          </span>
        )}
        <h1
          className={`text-4xl md:text-6xl font-bold tracking-tight text-white ${!isSaas && "font-mono"}`}
        >
          Hi, I'm{" "}
          <span
            className={
              isSaas
                ? "bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 bg-clip-text text-transparent"
                : "text-zinc-100"
            }
          >
            Arnav Kumar
          </span>
        </h1>
        <p
          className={`text-lg md:text-xl leading-relaxed ${isSaas ? "text-indigo-100/90" : "text-zinc-400 font-mono"}`}
        >
          Full-Stack MERN Developer specializing in high-performance web
          applications, interactive logic interfaces, and intelligent API
          implementations.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <a href="/resume.pdf" download className={styles.primaryBtn}>
            <Download size={18} /> Download Resume
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            <Mail size={18} /> Let's Connect
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h2 className={styles.sectionHeading}>
          <Code2
            size={24}
            className={isSaas ? "text-pink-300" : "text-zinc-500"}
          />
          Featured Deployments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className={styles.card}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono uppercase opacity-60 tracking-wider">
                  {project.type}
                </span>
                <div className="flex gap-3 text-zinc-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <svg
                      className="w-[18px] h-[18px] fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3
                className={`text-xl font-bold text-white mb-2 ${!isSaas && "font-mono"}`}
              >
                {project.title}
              </h3>
              <p className={`${styles.textMuted} mb-6 text-sm leading-relaxed`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className={styles.badge}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Education Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <h2 className={styles.sectionHeading}>
            <GraduationCap
              size={24}
              className={isSaas ? "text-purple-300" : "text-zinc-500"}
            />
            Education & Focus
          </h2>
          <div className="space-y-6">
            <div
              className={
                isSaas
                  ? "border-l-2 border-white/20 pl-4"
                  : "border-l-2 border-zinc-800 pl-4 font-mono"
              }
            >
              <h4 className="text-white font-semibold">
                MERN Stack with AI Integration
              </h4>
              <p className="text-sm opacity-80">
                Ducat Certification Institute
              </p>
            </div>
            <div
              className={
                isSaas
                  ? "border-l-2 border-white/20 pl-4"
                  : "border-l-2 border-zinc-800 pl-4 font-mono"
              }
            >
              <h4 className="text-white font-semibold">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-sm opacity-80">Ongoing Academic Matrix</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className={styles.sectionHeading}>
            <Briefcase
              size={24}
              className={isSaas ? "text-indigo-300" : "text-zinc-500"}
            />
            Technical Compilations
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS v4",
              "REST APIs",
              "Git/GitHub",
              "Vercel Architecture",
            ].map((skill, idx) => (
              <span key={idx} className={styles.badge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto text-center py-12">
        <h2 className={styles.sectionHeading + " justify-center"}>
          Get In Touch
        </h2>
        <p className={`${styles.textMuted} mb-8`}>
          Drop a line if you are looking to source a driven junior engineer who
          builds clean full-stack products.
        </p>

        {/* Render a success message if the email sent successfully */}
        {formStatus === "SUCCESS" ? (
          <div
            className={`p-6 border text-center ${
              isSaas
                ? "bg-white/10 border-white/30 rounded-2xl text-white backdrop-blur-md shadow-lg"
                : "bg-zinc-900 border-zinc-800 rounded-md text-zinc-100 font-mono"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">Transmission Received!</h3>
            <p className="text-sm opacity-80">
              Thank you for reaching out. I'll get back to your inbox as quickly
              as possible.
            </p>
            <button
              onClick={() => setFormStatus("IDLE")}
              className="mt-4 text-xs underline opacity-60 hover:opacity-100 block mx-auto"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="space-y-4 text-left"
            onSubmit={async (e) => {
              e.preventDefault();

              // Fix: Cache the form element reference immediately while it still exists!
              const form = e.currentTarget;
              setFormStatus("SUBMITTING");

              const formData = new FormData(form);

              const response = await fetch(
                "https://formspree.io/f/mjgnbzjw",
                {
                  method: "POST",
                  body: formData,
                  headers: {
                    Accept: "application/json",
                  },
                },
              );

              if (response.ok) {
                form.reset(); // Use the cached reference safely here
                setFormStatus("SUCCESS");
              } else {
                setFormStatus("ERROR");
              }
            }}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className={`w-full p-3 bg-black/20 border text-white placeholder-zinc-500 focus:outline-none transition-all
                ${isSaas ? "border-white/20 rounded-xl focus:border-white/50 bg-white/5" : "border-zinc-800 rounded-md focus:border-zinc-500"}`}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className={`w-full p-3 bg-black/20 border text-white placeholder-zinc-500 focus:outline-none transition-all
                ${isSaas ? "border-white/20 rounded-xl focus:border-white/50 bg-white/5" : "border-zinc-800 rounded-md focus:border-zinc-500"}`}
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={4}
              className={`w-full p-3 bg-black/20 border text-white placeholder-zinc-500 focus:outline-none transition-all
                ${isSaas ? "border-white/20 rounded-xl focus:border-white/50 bg-white/5" : "border-zinc-800 rounded-md focus:border-zinc-500"}`}
            />

            {formStatus === "ERROR" && (
              <p className="text-red-400 text-xs font-mono">
                Oops! Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={formStatus === "SUBMITTING"}
              className={
                styles.primaryBtn +
                " w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              }
            >
              {formStatus === "SUBMITTING"
                ? "Transmitting..."
                : "Send Transmission"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
