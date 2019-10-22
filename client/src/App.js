import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/Alert/Alert';
// import Landing from './containers/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Privacy from './components/Privacy/Privacy';
import NotFound from './components/NotFound/NotFound';
// import Landing from './component/Landing/Landing';
import Landing from './containers/Landing/Landing';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          {/* <Route exact path='/' component={Landing} /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/team" component={Team} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
