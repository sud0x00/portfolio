import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerVariants = {
    hidden: { y: '-100vh' },
    visible: {
      y: 0,
      backgroundColor: isDarkMode ? '#222' : '#fff',
      color: isDarkMode ? '#fff' : '#000',
      transition: { type: 'spring', stiffness: 120 }
    },
  };

  const headerVariants = {
    hidden: { y: '-100vh' },
    visible: { y: 0, transition: { type: 'spring', stiffness: 120 } },
        dark: { color: '#fff' },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    light: { backgroundColor: '#007bff', color: '#fff' },
    dark: { backgroundColor: '#6c757d', color: '#f8f9fa' },
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.div className="container-fluid text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style = {{height:"100vh"}}
    >
      <motion.header className="row p-5" variants={headerVariants}>
        <div className="col-12">
          <h1 className="display-3">Welcome to My Landing Page</h1>
          <motion.p className="lead" whileHover="hover" variants={buttonVariants}>
            This is some example text.
          </motion.p>
          <motion.button
            className="btn btn-lg btn-primary"
            whileHover="hover"
            variants={buttonVariants}
            onClick={toggleMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </motion.button>
        </div>
      </motion.header>
    </motion.div>
  );
}

export default App;
