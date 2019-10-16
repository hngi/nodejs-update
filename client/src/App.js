import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/Alert/Alert';
import Landing from 'containers/Landing/Landing';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch><Route path='/' component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
