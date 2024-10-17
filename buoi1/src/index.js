import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './Route';  // Import AppRoutes để sử dụng routing

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />  {/* Gọi router ở đây */}
  </React.StrictMode>,
  document.getElementById('root')
);
