import React, { Component } from 'react';
import Card from '../Card';
import Scoreboard from '../Scoreboard';
import Footer from '../Footer';
import API from '../../utils/API';
import './Game.css'

class Game extends Component {
    state = {
        bauers: [],
        score: 0,
        randomNumber: 0,
        tally: 0,
        selectedBauerId: ""
    }

    componentDidMount() {
        API
        .getBauers()
        .then(res => {
            let random = Math.floor(Math.random() * 6);
            this.setState({
                randomNumber: random,
                bauers: res.data,
                selectedBauerId: res.data[random]._id
            });
        });
    }

    cardClickedOn = (id) => {
        if(id === this.state.selectedBauerId) {
            let random = Math.floor(Math.random());
            this.setState({
                score: this.state.score + 1,
                randomNumber: random,
                selectedBauerId: this.state.bauers[random]._id
            });
        }
    };    

    render() {
        return (
            <div className="container">
            <Scoreboard
            randomNumber = {this.state.randomNumber}
            score = {this.state.score}
            tally = {this.state.tally}
            />
            {this.state.bauers.map(bauer => (
                <Card
                key = {bauer._id}
                id = {bauer._id}
                name = {bauer.name}
                image={bauer.image}
                cardClickedOn={this.cardClickedOn} 
                />
            ))}
            <Footer />

        </div>
        );
    }
}

export default Game;
