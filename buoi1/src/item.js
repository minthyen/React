import React from 'react';

// Component Item nhận props và render một thẻ <li> với <a>
function Item({ link, content }) {
    return (
        <li>
            <a href={link}>{content}</a>
        </li>
    );
}

export default Item;
