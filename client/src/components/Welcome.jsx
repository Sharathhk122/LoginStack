// Welcome.jsx
import React from 'react';
import { Layout } from './Layout';
import { Card, Space, Typography, Button } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card
            bordered={false}
            style={{
              background: 'rgba(36, 0, 70, 0.9)',
              border: '1px solid #5a189a',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(123, 44, 191, 0.4)',
              padding: '2rem',
              backdropFilter: 'blur(5px)'
            }}
          >
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Title level={2} style={{ color: '#c77dff', textAlign: 'center' }}>
                  Welcome to the Future!
                </Title>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Text style={{ color: '#e0aaff', fontSize: '1.1rem', display: 'block', textAlign: 'center' }}>
                  Your account has been successfully verified and you're now logged in to our immersive 3D platform.
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button
                  type="primary"
                  size="large"
                  style={{
                    width: '100%',
                    height: '45px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    marginTop: '2rem',
                    boxShadow: '0 4px 14px rgba(157, 78, 221, 0.4)'
                  }}
                  onClick={() => navigate('/login')}
                >
                  Back to Login
                </Button>
              </motion.div>
            </Space>
          </Card>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Welcome;