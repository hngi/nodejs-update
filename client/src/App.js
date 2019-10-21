import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/Alert/Alert';
import Landing from './containers/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team'
import Privacy from './components/Privacy/Privacy';

import NewLanding from './containers/Landing/NewLanding';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route path='/privacy' component={Privacy} />
          <Route path='/team' component={Team} />
          <Route path='/' component={Landing} />
          {/* <Route path='/s' component={NewLanding} /> */}
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
