// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between">
          <a href="#" className="text-2xl font-bold flex space-x-2">My Portfolio</a>
          <ul className="flex space-x-4">
            <li className='text-2xl font-bold'><a href="#about" className="hover:text-blue-500">About</a></li>
            <li className='text-2xl font-bold'><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li className='text-2xl font-bold'><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center bg-gradient-to-r from-gray-400 to-blue-500 text-white min-h-screen">
        <div className="text-center">
          <h1 className="text-5xl font-light">Hi, I am [Mbiatke LurexGalvin Edet]</h1>
          <p className="text-2xl mt-4">A passionate web developer</p>
          <a href="#about" className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded shadow-lg hover:bg-gray-200">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">
            I am a web developer with experience in building high-quality websites and applications.
            My expertise includes HTML, CSS, TailwindCSS JavaScript, React, Nextjs and modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Project One</h3>
              <p className="mt-2">Description of project one.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Project Two</h3>
              <p className="mt-2">Description of project two.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="mt-4">Feel free to reach out if you  like to work together!</p>
          <form className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <input type="text" className="p-4 bg-white rounded-lg shadow-lg" placeholder="Your Name" />
              <input type="email" className="p-4 bg-white rounded-lg shadow-lg" placeholder="Your Email" />
            </div>
            <textarea className="p-4 bg-white rounded-lg shadow-lg w-full mt-4" rows="4" placeholder="Your Message"></textarea>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center">
        <p className="text-gray-700">&copy; 2024 Mbiatke Nkanta. All rights reserved.</p>
      </footer>
    </div>
  );
}
