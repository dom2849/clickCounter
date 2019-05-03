import React from 'react';
import './Header.css'

export default function Header() {
    return (
        <header className="main-header">
            <h1 className="main-header__title">React Clicker</h1>
            <i className="far fa-hand-pointer main-header__icon"></i>
        </header>
    )
}