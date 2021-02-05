import React from "react";
import { Link } from "react-router-dom"
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/vertebra.png'

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={ logo } alt="Vertebra" />
        </Link>
    </header>
);

export default Header