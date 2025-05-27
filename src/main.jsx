// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import { ConfigProvider } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

const theme = {
  token: {
    colorPrimary: '#9d4edd',
    colorPrimaryActive: '#7b2cbf',
    colorPrimaryHover: '#c77dff',
    colorBgBase: 'transparent',
    colorBgContainer: 'rgba(36, 0, 70, 0.7)',
    colorTextBase: '#e0aaff',
    colorBorder: '#5a189a',
    colorBorderSecondary: '#3c096c',
    borderRadius: 12,
    fontSize: 16,
    wireframe: false,
  },
  components: {
    Input: {
      colorBgContainer: 'rgba(36, 0, 70, 0.7)',
      hoverBorderColor: '#9d4edd',
      activeBorderColor: '#c77dff',
      colorTextPlaceholder: '#e0aaff80',
    },
    Button: {
      colorPrimaryHover: '#c77dff',
      colorPrimaryActive: '#7b2cbf',
      colorBgContainerDisabled: 'rgba(36, 0, 70, 0.5)',
      colorTextDisabled: '#e0aaff80',
    },
    Card: {
      colorBgContainer: 'rgba(36, 0, 70, 0.85)',
      colorBorderSecondary: '#3c096c',
      borderRadiusLG: 16,
    },
    Alert: {
      colorInfoBg: 'rgba(36, 0, 70, 0.85)',
      colorInfoBorder: '#5a189a',
      borderRadiusLG: 12,
    },
    Form: {
      labelColor: '#e0aaff',
    },
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </ConfigProvider>
  </React.StrictMode>
);