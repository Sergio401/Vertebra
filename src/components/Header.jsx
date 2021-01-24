import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/vertebra.png'

const Header = () => (
    <header className="header">
        <img className="header__img" src={ logo } alt="Vertebra" />
    </header>
);

export default Header