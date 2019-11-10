import React from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

import App from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();