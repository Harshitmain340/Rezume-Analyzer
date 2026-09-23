import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative h-screen flex items-center justify-start overflow-hidden 
                    bg-gradient-to-br from-indigo-200 via-pink-200 to-blue-200 
                    dark:from-gray-900 dark:via-indigo-950 dark:to-black transition-colors duration-500">
      
      {/* Glow Borders */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white opacity-20 blur-2xl dark:bg-indigo-900/30"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-white opacity-20 blur-2xl dark:bg-indigo-900/30"></div>
      <div className="absolute top-0 left-0 w-24 h-full bg-white opacity-20 blur-2xl dark:bg-indigo-900/30"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-white opacity-20 blur-2xl dark:bg-indigo-900/30"></div>

      {/* Animated Color Blobs */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
                      rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse 
                      dark:from-indigo-800 dark:via-purple-900 dark:to-blue-900"></div>

      {/* Glass Card (Main Content) */}
      <motion.div
        className="z-10 text-center px-8 py-16 rounded-2xl backdrop-blur-xl 
                   bg-gradient-to-r from-white/80 via-white/70 to-white/60 
                   dark:from-gray-900/80 dark:via-indigo-950/70 dark:to-gray-800/60 
                   border border-gray-300 dark:border-indigo-800 
                   shadow-[0_0_35px_rgba(0,0,0,0.2)] dark:shadow-[0_0_25px_rgba(99,102,241,0.4)] 
                   ml-16 mt-20 transition-colors duration-500 max-w-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1
          className="text-5xl font-bold mb-6 font-sans flex items-center justify-center gap-3 
                     text-purple-800 dark:text-indigo-300"
          style={{
            WebkitTextStroke: "1px #6b21a8",
            textShadow: "2px 2px 4px rgba(0,0,0,0.4)"
          }}
        >
          Resume Analyzer 🚀
        </h1>

        {/* Tagline */}
        <p className="text-lg font-medium text-gray-900 dark:text-gray-300 max-w-md mx-auto mb-7" 
           style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}>
          Get clear tips to improve your resume and boost your chances of getting hired.
        </p>

        {/* Upload Button */}
        <motion.a
          href="/upload"
          className="inline-block px-7 py-3 bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 
                     dark:from-indigo-600 dark:via-purple-700 dark:to-blue-800 
                     text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(0,200,255,0.6)] 
                     dark:shadow-[0_0_20px_rgba(99,102,241,0.6)] 
                     hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] dark:hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] 
                     transition-transform duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Upload Your Resume
        </motion.a>
      </motion.div>

      {/* Resume stack (Right Corner Improved) */}
      <div className="absolute top-10 right-0 mr-[-80px] w-64 h-80 z-40">

        {/* Ghost Page */}
        <div className="absolute top-6 left-6 w-64 h-80 
                        bg-gray-100 dark:bg-gray-700 
                        border border-gray-300 dark:border-gray-600 
                        shadow-[4px_4px_10px_rgba(0,0,0,0.3)] 
                        rotate-1 opacity-70"></div>

        {/* Back Page */}
        <div className="absolute top-3 left-3 w-64 h-80 
                        bg-gray-200 dark:bg-gray-700 
                        border border-gray-300 dark:border-gray-600 
                        shadow-[6px_6px_12px_rgba(0,0,0,0.4)] 
                        rotate-3"></div>

        {/* Front Resume Page */}
        <motion.div
          className="relative w-64 h-80 
                     rounded-xl backdrop-blur-lg 
                     bg-gradient-to-r from-white/90 via-white/70 to-white/60 
                     dark:from-gray-900/80 dark:via-indigo-950/70 dark:to-gray-800/60 
                     border border-gray-300 dark:border-indigo-700 
                     shadow-[0_0_25px_rgba(0,0,0,0.4)] dark:shadow-[0_0_25px_rgba(99,102,241,0.4)] 
                     rotate-6 overflow-hidden transition-transform duration-500 
                     hover:scale-105 hover:rotate-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Transparent Hole */}
          <div className="absolute top-2 left-2 w-4 h-4 rounded-full 
                          border border-gray-400 dark:border-indigo-600 bg-transparent"></div>

          {/* Resume Content */}
          <div className="p-4 text-gray-700 dark:text-gray-200 font-sans text-sm leading-relaxed">
            <h2 className="font-bold text-lg mb-1 text-purple-700 dark:text-indigo-400 whitespace-nowrap">
              Harshit Kumar
            </h2>
            <p className="mb-2 font-semibold text-gray-800 dark:text-gray-300 whitespace-nowrap">
              Full‑Stack Developer
            </p>
            <hr className="my-2 border-gray-300 dark:border-indigo-700" />
            <p className="mb-2"><span className="font-bold">Experience:</span> 2+ years building modern web apps</p>
            <p className="mb-2"><span className="font-bold">Education:</span> B.Tech in Computer Science</p>
            <p className="mb-2"><span className="font-bold">Skills:</span> React, Node.js, TailwindCSS, MongoDB</p>
            <p className="mb-2"><span className="font-bold">Projects:</span> Resume Analyzer, SkillMatch, Portfolio Website</p>
            <p className="mb-2"><span className="font-bold">Contact:</span> harshit.dev@email.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
