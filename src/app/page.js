// pages/index.js

"use client";
import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BarcodeScanner from './components/BarcodeScanner';

export default function Home() {

  <BarcodeScanner />

  const [FormData, setFormData] = useState({ name: '', email: '', message: ''});
  const [status, setStatus] = useState('');


  const handleInputChange = (e) => {
  
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const docRef = await addDoc(collection(db, 'messages'), {FormData});
      console.log('Document written with ID: ', docRef.id);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (e) {
      console.error('Error adding document: ', e);
      setStatus('Error sending message. Please try again later.');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <motion.nav 
        className="bg-gray-200 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between">
          <ul className="flex space-x-4">
            <li className="text-2xl font-bold">
              <a href="#about" className="hover:text-blue-500">ABOUT</a>
            </li>
            <li className="text-2xl font-bold">
              <a href="#projects" className="hover:text-blue-500">PROJECTS</a>
            </li>
            <li className="text-2xl font-bold">
              <a href="#contact" className="hover:text-blue-500">CONTACT</a>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="flex items-center justify-center bg-gradient-to-r from-gray-500 to-blue-900 text-white min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src="/TransparentImage.jpeg"
          alt="background"
          className="absolute inset-x-39 inset-y-20 w-40 h-40 rounded-full object-cover opacity-75 z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [1, 2, 2, 1, 1], opacity: 1, rotate: [0, 0, 270, 270, 0], }}
          transition={{ duration: 1.2 }}
          
        />
        <div className="text-center">
          <motion.h1 
            className="text-6xl font-light text-black"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 5, ease: [0.5, 0.71, 1, 1.5], }}
            whileHover={{ scale: 1.2 }}
          >
            Hi, I am [Mbiatke LurexGalvin Edet]
          </motion.h1>
          <motion.p 
            className="text-4xl mt-4 font-light text-black"
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ x: [50, 150, 50], opacity: 1, scale:1 }}
            transition={{ delay: 0.7, duration: 5, ease: [0.5, 0.71, 1, 1.5], }}
            whileHover={{ scale: 1.2 }}
          >
            A passionate web developer
          </motion.p>
          <motion.a
            href="#about"
            className="mt-6 inline-block bg-white text-black px-6 py-2 rounded shadow-lg hover:bg-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Learn More
          </motion.a>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ABOUT ME
        </motion.h2>

        {/* Description with animation */}
        <motion.p
          className="mt-4 text-3xl"
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ x: [50, 150, 50],opacity: 1, scale: 1 }}
          transition={{ duration: 5, delay: 3,ease: [0.5, 0.71, 1, 1.5] }}
          whileHover={{ scale:1.2}}
        >
          I am a web developer with experience in building high-quality websites and applications.
          My expertise includes HTML, CSS, TailwindCSS, JavaScript, React, Nextjs, and modern web technologies.
        </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">PROJECTS</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Animated Project Card */}
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold">Project One</h3>
              <p className="mt-2">Counter App.</p>
              <Link href="https://mbiatke-counterapp.netlify.app/" className="text-blue-700 mt-4 inline-block">View Project</Link>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold">Project Two</h3>
              <p className="mt-2">Motivational Quote App.</p>
              <a href="https://mbiatkenkantaquoteapp.vercel.app/" className="text-blue-700 mt-4 inline-block">View Project</a>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold">Project Three</h3>
              <p className="mt-2">Weather App.</p>
              <a href="https://lurexweatherapp.netlify.app/" className="text-blue-700 mt-4 inline-block">View Project</a>
            </motion.div>

            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold">Project Four</h3>
              <p className="mt-2">My Github Page.</p>
              <a href="https://github.com/MbiatkeEdet" className="text-blue-700 mt-4 inline-block">View My Github</a>
            </motion.div>

            
            
            {/* Repeat for additional projects */}
            {/* Add other project cards here using similar motion.div wrappers */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">CONTACT ME</h2>
          <p className="mt-4 text-2xl">Feel free to reach out lets work together!</p>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <input type="text" name='name' aria-label='your name' onChange={handleInputChange} value={FormData.name} className="p-4 bg-white rounded-lg shadow-lg" placeholder="Your Name" required />
              <input type="email" name='email' aria-label='your email' onChange={handleInputChange} value={FormData.email} className="p-4 bg-white rounded-lg shadow-lg" placeholder="Your Email" required />
            </div>
            <textarea name='message' onChange={handleInputChange} value={FormData.message} className="p-4 bg-white rounded-lg shadow-lg w-full mt-4" rows="4" placeholder="Your Message" required></textarea>
            <button className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-500">Send Message</button>
          </form>
          {status && <p className='mt-4 text-lg'>{status}</p>}
        </div>
        <div className='mt-6'>
          <p className='text-lg'>phone:
            <a href='tel:+2348036265605' className='text-blue-400 hover:text-blue-700 ml-2'>+2348036265605</a>
          </p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
            {/* Twitter */}
            <a href="https://twitter.com/Galvin_007" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.933 4.933 0 0023.337 3.1a9.864 9.864 0 01-3.13 1.195 4.918 4.918 0 00-8.384 4.482A13.947 13.947 0 011.671 3.149 4.917 4.917 0 003.15 9.723a4.9 4.9 0 01-2.229-.616v.06a4.919 4.919 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.923 4.923 0 004.6 3.42A9.868 9.868 0 010 21.543 13.905 13.905 0 007.548 24c9.056 0 14.01-7.505 14.01-14.01 0-.213-.005-.425-.014-.637A10.012 10.012 0 0024 4.557z"/></svg>
            </a>
  
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/mbiatkenkanta" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5A2.505 2.505 0 010 3.5 2.505 2.505 0 012.48 1a2.505 2.505 0 012.5 2.5zM.47 8h4.93v14H.47V8zM7.45 8h4.7v2.06h.07c.65-1.23 2.25-2.5 4.63-2.5 4.96 0 5.87 3.26 5.87 7.5v8.94h-4.92v-7.9c0-1.88-.03-4.3-2.63-4.3-2.63 0-3.03 2.05-3.03 4.17v8.03H7.45V8z"/></svg>
            </a>
  
            {/* GitHub */}
            <a href="https://github.com/MbiatkeEdet" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.834 2.81 1.305 3.495.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.468-2.382 1.235-3.224-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.49 11.49 0 016.003 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.769.842 1.234 1.914 1.234 3.224 0 4.61-2.806 5.625-5.478 5.921.43.371.815 1.102.815 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 py-6 text-center">
        <p className="text-yellow-700">&copy; 2024 Mbiatke Nkanta. All rights reserved.</p>
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
