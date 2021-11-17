import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import HomePage from './components/common/HomePage';
import AboutPage from './components/common/AboutPage';
import Header from './components/common/Header';
import Contact from './components/common/ContactPage';
import NotFound from './components/common/NotFound';
import ViewContact from './components/common/ViewContact';

import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  withRouter,
} from 'react-router-dom';
import ProductForm from './components/pages/ProductForm';
import configureStore from './components/redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <div className="container-fluid">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/products" component={ProductForm} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={Contact} />
              <Route path="/view/:num" component={ViewContact} />
              <Route
                path="*"
                component={() => {
                  return (
                    <>
                      <NotFound />
                    </>
                  );
                }}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </ReduxProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
