import React from 'react';
import './Clicker.css';

export default function Clicker(props) {
    return (
        <section className="clicker">
            <div className="clicker__wrapper">
                <p className="clicker__value"> {props.value} </p>
                <div className="clicker__buttons">
                    <button onClick = {props.decrementValue} className="button clicker__minus"> <i className="fas fa-minus"></i> </button>
                    <button onClick = {props.resetValue} className="button clicker__reset"> <i className="fas fa-undo"></i> </button>
                    <button onClick = {props.incrementValue} className="button clicker__plus"> <i className="fas fa-plus"></i> </button>
                </div>
            </div>
        </section>
    )
}