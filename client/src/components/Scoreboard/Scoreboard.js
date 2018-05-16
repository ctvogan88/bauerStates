import React, { Component } from 'react';

const Scoreboard = props => (
    <header>

        <p>Random Number: {props.randomNumber}</p>
        <p>Score: {props.score}</p>
        <p>Tally: {props.tally}</p>
    </header>
);

export default Scoreboard;
