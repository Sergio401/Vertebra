import React from 'react';
import '../assets/styles/components/Menu.scss'

const Menu = ({ children, children2 }) => (
    <div className="menu">
        {children}
        {children2}
    </div>
);

export default Menu