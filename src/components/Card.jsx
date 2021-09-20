import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
        </div>
    )
}
