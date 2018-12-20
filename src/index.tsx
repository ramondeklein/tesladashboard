import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import App from "./app";
import "./index.scss";
import createRootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import { ApplicationState } from "./types";

const history = createBrowserHistory();

const store = createStore<ApplicationState, any, any, any>(
  createRootReducer(history),
  {},
  compose(applyMiddleware(routerMiddleware(history), thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
