import React from 'react';
import Item from './item'; // Import component Item

// Component Menu nhận props là list
function Menu({ list }) {
    return (
        <ul>
            {list.map((item, index) => (
                <Item key={index} link={item.url} content={item.text} />
            ))}
        </ul>
    );
}

export default Menu;
