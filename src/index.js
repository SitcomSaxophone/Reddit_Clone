import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';

// import App from './components/App/App';
import Routes from './routes';

ReactDOM.render(
    <Routes history={history} />,
    document.getElementById('root')
);
