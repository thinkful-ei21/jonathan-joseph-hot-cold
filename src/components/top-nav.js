import React from 'react';
import {connect} from 'react-redux';
import {resetGame, toggleInfo} from '../actions';

import './styles/top-nav.css';

export function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={() => 
                        props.dispatch(
                            toggleInfo(true)
                        )}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={() => 
                    props.dispatch(
                        resetGame(Math.floor(Math.random() * 100) + 1)
                    )}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(TopNav);

