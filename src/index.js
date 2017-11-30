import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter as Router } from 'react-router-dom'


import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
