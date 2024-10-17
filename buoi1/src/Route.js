import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';     // Import component App
import Login from './Login'; // Import component Login
import Hello from './Helloo'; // Import component Hello
import Car from './Car';     // Import component Car
import Helloo from './Helloo';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Route 1: Path '/', render <App /> */}
                <Route path="/" element={<App />} />

                {/* Route 2: Path '/login', render <Login /> */}
                <Route path="/login" element={<Login />} />

                {/* Route 3: Path '/hello', render <Hello /> */}
                <Route path="/helloo" element={<Helloo />} />

                {/* Route 4: Path '/car', render <Car /> */}
                <Route path="/car" element={<Car />} />

                {/* Route 5: Path '*', render thông báo không tìm thấy */}
                <Route path="*" element={<div>Không tìm thấy trang web theo yêu cầu</div>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
