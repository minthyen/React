import React, { useState } from 'react';

function Login() {
    // Khởi tạo state để lưu giá trị của username và password
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    // Hàm xử lý sự thay đổi khi người dùng nhập vào input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value  // Cập nhật state tương ứng với input
        });
    };

    // Hàm xử lý khi người dùng click vào nút Đăng nhập
    const handleLogin = () => {
        console.log("Login Data:", loginData); // In giá trị state ra console
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form>
                {/* Input cho Username */}
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}  // Gọi handleChange khi thay đổi giá trị input
                        placeholder="Enter your username"
                    />
                </div>
                
                {/* Input cho Password */}
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange}  // Gọi handleChange khi thay đổi giá trị input
                        placeholder="Enter your password"
                    />
                </div>

                {/* Nút Đăng nhập */}
                <div>
                    <button type="button" onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
