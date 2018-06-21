import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        }
    }

    showInfo() {
        this.setState({
            display: true
        })
    }

    removeInfo() {
        this.setState({
            display: false
        })
    }

    render() {

        if (this.state.display === true) {
            return (
                <header>
                    <InfoModal removeInfo={() => this.removeInfo()}/>
                </header>
            )
        }

        return (
            <header>
                <TopNav resetGame={this.props.resetGame} showInfo={() => this.showInfo()}/>
                <h1>HOT or COLD</h1>
            </header>
        ) 
    }       
};
