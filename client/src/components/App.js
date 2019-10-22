import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './Alert';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';
import Home from './Home';
import Team from './Team';
import Privacy from './Privacy';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column">
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/team" component={Team} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
