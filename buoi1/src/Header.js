import React from 'react';
import Menu from './Menu'; // Import component Menu

// Component Header
function Header() {
    // Tạo danh sách menu với các object có 2 key là url và text
    const list = [
        { url: '/', text: 'App' },
        { url: '/Login', text: 'Login' },
        { url: '/Helloo', text: 'Helloo' },
        { url: '/Car', text: 'Car' }
    ];

    return (
        <header>
            <h1>Website Header</h1>
            <Menu list={list} /> {/* Truyền danh sách cho component Menu */}
        </header>
    );
}

export default Header;
