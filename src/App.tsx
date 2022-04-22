import { motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        layout
        transition={{ duration: 1, type: 'spring' }}
        style={{
          borderRadius: '1rem',
          boxShadow: '0px 10px 30px #102329',
        }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              minima fugiat debitis voluptatem placeat consequuntur eligendi
              obcaecati magnam dolor tempora?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, placeat.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
