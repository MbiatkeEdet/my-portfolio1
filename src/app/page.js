// pages/index.js

"use client";
import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import Link from "next/link";
import BarcodeScanner from "./components/BarcodeScanner";

export default function Home() {
  <BarcodeScanner />;

  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const docRef = await addDoc(collection(db, "messages"), { FormData });
      console.log("Document written with ID: ", docRef.id);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } catch (e) {
      console.error("Error adding document: ", e);
      setStatus("Error sending message. Please try again later.");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <motion.nav
        className="relative z-20 border-b border-white/10 bg-[#081321] shadow-lg shadow-slate-950/10"
        initial={{ y: -100 }}
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <div className="mx-auto flex max-w-7xl justify-end px-6 py-5 sm:px-10 lg:px-20">
          <ul className="flex flex-wrap justify-end gap-5 sm:gap-8">
            <li className="text-xs font-semibold tracking-[0.2em] text-slate-300">
              <a
                href="#about"
                className="transition-colors hover:text-cyan-200"
              >
                ABOUT
              </a>
            </li>
            <li className="text-xs font-semibold tracking-[0.2em] text-slate-300">
              <a
                href="#projects"
                className="transition-colors hover:text-cyan-200"
              >
                PROJECTS
              </a>
            </li>
            <li className="text-xs font-semibold tracking-[0.2em] text-slate-300">
              <a
                href="#contact"
                className="transition-colors hover:text-cyan-200"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#081321] px-6 py-24 text-white sm:px-10 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_48%,rgba(37,99,235,0.28),transparent_42%),linear-gradient(115deg,#081321_20%,#102a43_100%)]"
        />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative z-10 text-center lg:text-left">
            <motion.h1
              className="text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Hi, I am{" "}
              <span className="font-medium text-cyan-200">
                Mbiatke LurexGalvin Edet
              </span>
            </motion.h1>
            <motion.p
              className="mt-5 text-xl font-light text-slate-200 sm:text-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              A passionate web developer
            </motion.p>
            <motion.a
              href="#about"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white px-7 py-3 font-medium text-slate-950 shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Explore my work{" "}
              <span aria-hidden="true" className="text-lg">
                ↗
              </span>
            </motion.a>
          </div>

          <div className="relative mx-auto flex w-full max-w-[30rem] justify-center lg:justify-end">
            <motion.div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[15rem_15rem_2rem_2rem] bg-cyan-300/10 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative w-[min(78vw,25rem)] rounded-[14rem_14rem_1.75rem_1.75rem] bg-gradient-to-br from-white/70 via-cyan-100/30 to-blue-400/50 p-[1px] shadow-[0_35px_100px_rgba(0,0,0,0.42)]"
              initial={{
                opacity: 0,
                clipPath: "inset(0 0 100% 0 round 14rem 14rem 1.75rem 1.75rem)",
              }}
              animate={{
                opacity: 1,
                clipPath: "inset(0 0 0% 0 round 14rem 14rem 1.75rem 1.75rem)",
              }}
              transition={{
                duration: 1.35,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="relative h-[min(105vw,34rem)] max-h-[34rem] min-h-[27rem] overflow-hidden rounded-[14rem_14rem_1.75rem_1.75rem] bg-slate-800"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src="/TransparentImage.jpeg"
                  alt="Mbiatke LurexGalvin Edet, web developer"
                  className="h-full w-full object-cover object-[center_38%]"
                  initial={{ scale: 1.18, opacity: 0.7 }}
                  animate={{ scale: [1, 1.035, 1], opacity: [1, 0.78, 1] }}
                  transition={{
                    duration: 5,
                    delay: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#081321]/55 via-transparent to-white/10"
                />
                <div className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-slate-950/45 px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
                  Design · Build · Create
                </div>
              </motion.div>
            </motion.div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-2 h-24 w-24 rounded-full border border-cyan-100/20 lg:-left-9"
            />
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="bg-[#f4f7fb] px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              A little about me
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Engineering meets thoughtful design.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I am a front-end developer with a background in Materials &
              Metallurgical Engineering from Federal University of Technology,
              Owerri. I love turning complex ideas into intuitive, impactful
              digital experiences.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              I build responsive websites and applications with React, Next.js,
              JavaScript, Tailwind CSS, Chakra UI and Material UI.
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.07)] sm:p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                Education
              </h3>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="mt-8 space-y-8">
              <div className="border-l-2 border-cyan-500 pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                  2014
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                  Materials & Metallurgical Engineering
                </h4>
                <p className="mt-1 text-slate-600">
                  Federal University of Technology, Owerri
                </p>
              </div>
              <div className="border-l-2 border-cyan-500 pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                  2022
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                  Front-end Web Development
                </h4>
                <p className="mt-1 text-slate-600">AltSchool Africa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white px-6 py-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Selected work
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Projects with purpose.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">
              A selection of web experiences and applications focused on solving
              real-world problems.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "TidyNow",
                description: "Home cleaning management app",
                href: "https://tidynow.com.ng/",
                label: "Visit project",
              },
              {
                title: "Smart Road",
                description: "Gas station management app",
                href: "https://smart-roadapp.netlify.app/",
                label: "Visit project",
              },
              {
                title: "Quote App",
                description: "A daily dose of motivation",
                href: "https://mbiatkenkantaquoteapp.vercel.app/",
                label: "Visit project",
              },
              {
                title: "Weather App",
                description: "Weather updates at a glance",
                href: "https://lurexweatherapp.netlify.app/",
                label: "Visit project",
              },
              {
                title: "GitHub",
                description: "Explore my open-source work",
                href: "https://github.com/MbiatkeEdet",
                label: "View profile",
              },
              {
                title: "Finear",
                description: "An educational app experience",
                href: "https://finear.app",
                label: "Visit project",
              },
            ].map((project, index) => (
              <motion.article
                key={project.title}
                className="group flex min-h-56 flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors hover:border-blue-200 hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.09)]"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{project.description}</p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:text-white"
                  >
                    ↗
                  </span>
                </div>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-800 transition-colors hover:text-cyan-700"
                >
                  {project.label}
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-[#081321] px-6 py-24 text-white sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Have a project in mind?
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s make it happen.
            </h2>
            <p className="mt-4 text-lg leading-7 text-slate-300">
              Tell me a little about what you&apos;re building. I&apos;d love to
              hear from you.
            </p>
          </div>
          <form
            className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur sm:p-9"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                aria-label="your name"
                onChange={handleInputChange}
                value={FormData.name}
                className="rounded-xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="email"
                aria-label="your email"
                onChange={handleInputChange}
                value={FormData.email}
                className="rounded-xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
                placeholder="Your email"
                required
              />
            </div>
            <textarea
              name="message"
              aria-label="your message"
              onChange={handleInputChange}
              value={FormData.message}
              className="mt-6 w-full rounded-xl border border-white/10 bg-slate-950/50 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20"
              rows="5"
              placeholder="A few details about your project..."
              required
            ></textarea>
            <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-200 px-7 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950">
              Send message <span aria-hidden="true">↗</span>
            </button>
          </form>
          {status && (
            <p
              className="mt-5 text-center text-sm text-cyan-100"
              aria-live="polite"
            >
              {status}
            </p>
          )}
          <div className="mt-9 text-center">
            <p className="text-sm text-slate-400">
              Prefer a direct conversation?
            </p>
            <p className="mt-2 text-lg">
              <a
                href="tel:+2348036265605"
                className="text-cyan-200 transition-colors hover:text-white"
              >
                +234 803 626 5605
              </a>
            </p>
          </div>

          <div className="mt-7 flex justify-center gap-5">
            {/* Twitter */}
            <a
              aria-label="Twitter"
              href="https://twitter.com/Galvin_007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-cyan-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.933 4.933 0 0023.337 3.1a9.864 9.864 0 01-3.13 1.195 4.918 4.918 0 00-8.384 4.482A13.947 13.947 0 011.671 3.149 4.917 4.917 0 003.15 9.723a4.9 4.9 0 01-2.229-.616v.06a4.919 4.919 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.923 4.923 0 004.6 3.42A9.868 9.868 0 010 21.543 13.905 13.905 0 007.548 24c9.056 0 14.01-7.505 14.01-14.01 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/mbiatkenkanta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-cyan-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5A2.505 2.505 0 010 3.5 2.505 2.505 0 012.48 1a2.505 2.505 0 012.5 2.5zM.47 8h4.93v14H.47V8zM7.45 8h4.7v2.06h.07c.65-1.23 2.25-2.5 4.63-2.5 4.96 0 5.87 3.26 5.87 7.5v8.94h-4.92v-7.9c0-1.88-.03-4.3-2.63-4.3-2.63 0-3.03 2.05-3.03 4.17v8.03H7.45V8z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              aria-label="GitHub"
              href="https://github.com/MbiatkeEdet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-cyan-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.834 2.81 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.468-2.382 1.235-3.224-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 016.003 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.769.842 1.234 1.914 1.234 3.224 0 4.61-2.806 5.625-5.478 5.921.43.371.815 1.102.815 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#081321] px-6 py-6 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Mbiatke Nkanta. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

// pages/index.js
// import React from 'react';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       {/* Navbar */}
//       <nav className="bg-gray-200 shadow-lg">
//         <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between">
//           {/* <a href="#" className="text-2xl font-bold flex space-x-2">My Portfolio</a> */}
//           <ul className="flex space-x-4">
//             <li className='text-2xl font-bold'><a href="#about" className="hover:text-blue-500">ABOUT</a></li>
//             <li className='text-2xl font-bold'><a href="#projects" className="hover:text-blue-500">PROJECTS</a></li>
//             <li className='text-2xl font-bold'><a href="#contact" className="hover:text-blue-500">CONTACT</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="flex items-center justify-center bg-gradient-to-r from-gray-400 to-blue-900 text-white min-h-screen">

//       <img
//           src="/TransparentImage.jpeg"
//           alt="background"
//           className='absolute inset-x-25 inset-y-20 w-40 h-40 rounded-full object-cover opacity-75 z-10'
//           />
//         <div className="text-center">

//           {/* <img
//           src="/TransparentImage.jpeg"
//           alt="background"
//           className='absolute inset-0 m-w-sm object-fill opacity-75'
//           /> */}

//           <h1 className="text-5xl font-light">Hi, I am [Mbiatke LurexGalvin Edet]</h1>
//           <p className="text-2xl mt-4 font-light">A passionate web developer</p>
//           <a href="#about" className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded shadow-lg hover:bg-gray-200">Learn More</a>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-gray-100 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold">About Me</h2>
//           <p className="mt-4 text-lg">
//             I am a web developer with experience in building high-quality websites and applications.
//             My expertise includes HTML, CSS, TailwindCSS JavaScript, React, Nextjs and modern web technologies.
//           </p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-16 bg-white text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold">Projects</h2>
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {/* Project 1 */}
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold">Project One</h3>
//               <p className="mt-2">Motivational Quote App.</p>
//               <a href="#" className="text-blue-700 mt-4 inline-block">View Project</a>
//             </div>
//             {/* Project 2 */}
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold">Project Two</h3>
//               <p className="mt-2">Description of project two.</p>
//               <a href="#" className="text-blue-700 mt-4 inline-block">View Project</a>
//             </div>
//             {/* Project 3 */}
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold">Project Three</h3>
//               <p className="mt-2">Description of project three.</p>
//               <a href="#" className="text-blue-700 mt-4 inline-block">View Project</a>
//             </div>
//             {/* Project 4 */}
//             <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold">Project Four</h3>
//               <p className="mt-2">Counter Application.</p>
//               <a href="#" className="text-blue-700 mt-4 inline-block">View Project</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-gray-100 text-center">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-4xl font-bold">Contact Me</h2>
//           <p className="mt-4">Feel free to reach out if you  like to work together!</p>
//           <form className="mt-8">
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//               <input type="text" className="p-4 bg-white rounded-lg shadow-lg" placeholder="Your Name" />
//               <input type="email" className="p-4 bg-white rounded-lg shadow-lg" placeholder="Your Email" />
//             </div>
//             <textarea className="p-4 bg-white rounded-lg shadow-lg w-full mt-4" rows="4" placeholder="Your Message"></textarea>
//             <button className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-500">Send Message</button>
//           </form>
//         </div>
//         <div className='mt-6'>
//           <p className='text-lg'>phone:
//             <a href='tel:+2348036265605' className='text-blue-400 hover:text-blue-700 ml-2'>+2348036265605</a>
//           </p>
//         </div>

//         <div className="mt-6 flex justify-center space-x-4">
//             {/* Twitter */}
//             <a href="https://twitter.com/Galvin_007" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.933 4.933 0 0023.337 3.1a9.864 9.864 0 01-3.13 1.195 4.918 4.918 0 00-8.384 4.482A13.947 13.947 0 011.671 3.149 4.917 4.917 0 003.15 9.723a4.9 4.9 0 01-2.229-.616v.06a4.919 4.919 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.923 4.923 0 004.6 3.42A9.868 9.868 0 010 21.543 13.905 13.905 0 007.548 24c9.056 0 14.01-7.505 14.01-14.01 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z"/></svg>
//             </a>

//             {/* LinkedIn */}
//             <a href="https://linkedin.com/in/mbiatkenkanta" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5A2.505 2.505 0 010 3.5 2.505 2.505 0 012.48 1a2.505 2.505 0 012.5 2.5zM.47 8h4.93v14H.47V8zM7.45 8h4.7v2.06h.07c.65-1.23 2.25-2.5 4.63-2.5 4.96 0 5.87 3.26 5.87 7.5v8.94h-4.92v-7.9c0-1.88-.03-4.3-2.63-4.3-2.63 0-3.03 2.05-3.03 4.17v8.03H7.45V8z"/></svg>
//             </a>

//             {/* GitHub */}
//             <a href="https://github.com/MbiatkeEdet" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.834 2.81 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.468-2.382 1.235-3.224-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 016.003 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.769.842 1.234 1.914 1.234 3.224 0 4.61-2.806 5.625-5.478 5.921.43.371.815 1.102.815 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
//             </a>
//           </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-200 py-6 text-center">
//         <p className="text-gray-700">&copy; 2024 Mbiatke Nkanta. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }
