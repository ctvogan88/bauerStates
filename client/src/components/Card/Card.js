import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="col-sm-4 bau-card"
    style={{ backgroundImage: 'url("${props.image}"}' }}
    onClick={() => props.cardClickOn(props.id)}
    >
    <p>{props.name}</p>
    </div>

);

export default Card;