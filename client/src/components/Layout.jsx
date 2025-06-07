// Layout.jsx
import { CanvasBackground } from './CanvasBackground';
import { motion } from 'framer-motion';
import { Alert } from 'antd';

export const Layout = ({ children }) => (
  <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
    <CanvasBackground />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: 'relative',
        maxWidth: '500px',
        margin: '0 auto',
        padding: '2rem',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Alert
          message="Welcome to 3D Auth"
          description="Experience secure authentication in a 3D environment"
          type="info"
          showIcon
          style={{
            marginBottom: '2rem',
            backgroundColor: 'rgba(36, 0, 70, 0.85)',
            border: '1px solid #5a189a',
            backdropFilter: 'blur(5px)',
            borderRadius: '12px'
          }}
        />
        {children}
      </motion.div>
    </motion.div>
  </div>
);