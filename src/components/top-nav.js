import React from 'react';

import './styles/top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={e => props.showInfo(e)}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={e => props.resetGame(e)}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

