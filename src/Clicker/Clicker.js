import React from 'react';
import './Clicker.css';

export default function Clicker() {
    return (
        <section className="clicker">
            <div className="clicker__wrapper">
                <p className="clicker__value"> 0 </p>
                <div className="clicker__buttons">
                    <button className="button clicker__minus"> <i className="fas fa-minus"></i> </button>
                    <button className="button clicker__reset"> <i className="fas fa-undo"></i> </button>
                    <button className="button clicker__plus"> <i className="fas fa-plus"></i> </button>
                </div>
            </div>
        </section>
    )
}