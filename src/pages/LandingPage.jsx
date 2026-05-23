import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLaptopCode, FaTerminal, FaCodeBranch, FaSignInAlt, FaHackerrank } from 'react-icons/fa';
import { SiC, SiCplusplus, SiPython, SiJavascript, SiReact } from 'react-icons/si';
import './LandingPage.css';

const floatingEmojis = [
  "💻", "🖥️", "🧑‍💻", "⚙️", "🛠️", "🧰", "📦", "📁", "📂", "🗂️", "🧾", "🚀", "🔥", "⚡", "🌐", "🔗", "🔌", "🧩", "🧠"
].map((emoji, i) => ({
  id: i,
  emoji,
  left: `${Math.random() * 90 + 5}%`,
  top: `${Math.random() * 90 + 5}%`,
  duration: Math.random() * 5 + 5,
  delay: Math.random() * 2,
  scale: Math.random() * 0.5 + 0.8,
  moveY: Math.random() > 0.5 ? -20 : 20,
  moveX: Math.random() > 0.5 ? -10 : 10
}));

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="landing-container"
      initial={{ opacity: 0, backgroundColor: '#000' }}
      animate={{ opacity: 1, backgroundColor: '#050505' }}
      exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.8 } }}
    >
      <div className="landing-glow-overlay"></div>

      {/* Animated 3D Floating Background Elements */}
      <div className="floating-icons-bg preserve-3d">
        {floatingEmojis.map((item) => (
          <motion.div
            key={item.id}
            className="emoji-float preserve-3d"
            style={{ 
              left: item.left, 
              top: item.top,
              scale: item.scale 
            }}
            animate={{
              y: [0, item.moveY, 0],
              x: [0, item.moveX, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      <div className="landing-content perspective-container">
        <motion.div 
          className="pop-over-card preserve-3d"
          initial={{ scale: 0.5, rotateX: 60, rotateY: -20, opacity: 0, z: -500 }}
          animate={{ scale: 1, rotateX: 0, rotateY: 0, opacity: 1, z: 0 }}
          transition={{ type: "spring", damping: 15, stiffness: 100, duration: 1.5 }}
        >
          <motion.h1 
            className="landing-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Welcome to <span className="text-sky">My Universe</span>
          </motion.h1>
          
          {/* 3D Developer Text */}
          <div className="developer-container preserve-3d">
            <motion.div 
              className="developer-3d-text"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ animation: 'blink 2s step-end infinite' }}
              transition={{ delay: 1.2, type: 'spring', bounce: 0.5 }}
              whileHover={{ scale: 1.1, rotateX: 20, rotateY: -20 }}
            >
              //DEVELOPER_
            </motion.div>
          </div>

          {/* 3D Transparent Cube */}
          <div className="cube-wrapper preserve-3d">
            <div className="cube preserve-3d">
              <div className="cube-face front">
                <img src="Image.jpeg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="cube-face back"><SiC color="#A8B9CC" /></div>
              <div className="cube-face right"><SiCplusplus color="#00599C" /></div>
              <div className="cube-face left"><SiPython color="#3776AB" /></div>
              <div className="cube-face top"><SiJavascript color="#F7DF1E" /></div>
              <div className="cube-face bottom"><SiReact color="#61DAFB" /></div>
            </div>
          </div>

          <motion.button 
            className="ready-button preserve-3d"
            whileHover={{ scale: 1.1, translateZ: 30, boxShadow: "0px 10px 30px rgba(245, 158, 11, 0.5)" }}
            whileTap={{ scale: 0.95, translateZ: 10 }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={() => navigate('/home')}
          >
            <span className="btn-text">Ready to Go</span>
            <FaSignInAlt className="enter-icon" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
