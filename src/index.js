import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Context from './Components/Main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Context />, document.getElementById('root'));
registerServiceWorker();
