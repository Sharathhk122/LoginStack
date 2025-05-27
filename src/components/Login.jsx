// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { Button, Form, Input } from 'antd';
import { Layout } from './Layout';
import { motion } from 'framer-motion';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await login(values);
      navigate('/welcome');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            style={{ maxWidth: '500px' }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 style={{ 
                color: '#e0aaff', 
                marginBottom: '2rem',
                fontSize: '2rem',
                textAlign: 'center',
                textShadow: '0 0 10px rgba(224, 170, 255, 0.5)'
              }}>Login</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input 
                  placeholder="Email" 
                  type="email" 
                  size="large"
                  autoComplete="username"
                  style={{ borderRadius: '12px' }}
                />
              </Form.Item>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password 
                  placeholder="Password" 
                  size="large"
                  autoComplete="current-password"
                  style={{ borderRadius: '12px' }}
                />
              </Form.Item>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  size="large"
                  style={{ 
                    width: '100%',
                    height: '45px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    marginTop: '1rem',
                    boxShadow: '0 4px 14px rgba(157, 78, 221, 0.4)'
                  }}
                >
                  Login
                </Button>
              </Form.Item>
            </motion.div>
          </Form>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Login;