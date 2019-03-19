import React from 'react';
import ReactDOM from 'react-dom';
import './resources/colors.scss';
import WhiteSurface from './white-surface.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WhiteSurface />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
