import React from 'react';
import {connect} from 'react-redux';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './styles/header.css';

export default function Header(){
    return (
        <header>
            {/* <TopNav resetGame={this.props.resetGame} showInfo={() => this.showInfo()}/> */}
            <TopNav />
            <h1>HOT or COLD</h1>
        </header>
    ) 
}       

