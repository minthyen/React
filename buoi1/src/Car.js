import React, { useState } from 'react';

function Car() {
    // Khởi tạo state cho các thông tin của Car
    const [car, setCar] = useState({
        name: "Toyota",
        color: "Red",
        year: 2020
    });

    // Hàm để cập nhật lại năm của Car
    const updateYear = (e) => {
        setCar({
            ...car, // Giữ lại các thông tin khác của xe
            year: e.target.value  // Cập nhật year bằng giá trị từ input
        });
    };

    return (
        <>
            <h2>Show information of Car:</h2>
            <p>Car Name: {car.name}</p>
            <p>Car Color: {car.color}</p>
            <p>Car Year: {car.year}</p>
            
            <h3>Update Year of Car:</h3>
            <input 
                type="number" 
                placeholder="Enter new year" 
                onChange={updateYear} // Gọi hàm updateYear khi người dùng nhập
            />
            <input 
                type="button" 
                value="Update Year" 
                onClick={() => alert("Year updated to: " + car.year)} // Hiển thị thông báo khi click
            />
        </>
    );
}

export default Car;
