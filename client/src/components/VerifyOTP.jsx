import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyOtp } from '../services/api';
import { Button, Form, Input } from 'antd';
import { Layout } from './Layout';
import { motion } from 'framer-motion';

const VerifyOTP = () => {
  const [loading, setLoading] = useState(false);
  const email = localStorage.getItem('email');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await verifyOtp({ email, otp: values.otp });
      navigate('/welcome');
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Form
          name="verify"
          onFinish={onFinish}
          layout="vertical"
          style={{ maxWidth: '500px' }}
        >
          <h2 style={{ 
            color: '#e0aaff', 
            marginBottom: '2rem',
            fontSize: '2rem',
            textAlign: 'center',
            textShadow: '0 0 10px rgba(224, 170, 255, 0.5)'
          }}>Verify OTP</h2>
          
          <Form.Item
            name="otp"
            rules={[{ required: true, message: 'Please input the OTP!' }]}
          >
            <Input 
              placeholder="Enter OTP" 
              size="large"
              style={{ borderRadius: '12px' }}
            />
          </Form.Item>

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
                marginTop: '1rem'
              }}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>
      </motion.div>
    </Layout>
  );
};

export default VerifyOTP;