import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

const Root = () => (
    <Provider store={store}>
        <Router >
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(<Root></Root>, document.getElementById('root'));

serviceWorker.unregister();



