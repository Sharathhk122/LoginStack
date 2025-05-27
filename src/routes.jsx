import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Signup from './components/Signup';
import VerifyOTP from './components/VerifyOTP';
import Login from './components/Login';
import Welcome from './components/Welcome';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Signup />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </AnimatePresence>
  );
};

export default () => (
  <Router>
    <AppRoutes />
  </Router>
);