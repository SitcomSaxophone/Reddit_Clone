import react from 'react';
import { Router, Route } from 'react-router';

import App from './components/App/App';

const Routes = props => {
    <Router {...props}>
        <Route path='/' component={App}>

        </Route>
    </Router>
}

export default Routes;