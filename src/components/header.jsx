import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lodLogo from '../resources/lod.png';
import './styles.module.css';

export default class Head extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>
                        <Link to="/"><img src={lodLogo} alt="LOD" /></Link>
                    </h1>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/datasets">Datasets</Link>
                        </li>
                        <li>
                            <Link to="/visualization">Visualization</Link>
                        </li>
                        <li>
                            <Link to="/analitycs">Analitycs</Link>
                        </li>
                    </ul>
                </nav>
                <hr />

            </React.Fragment>
        );
    }
}
