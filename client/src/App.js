import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/Alert/Alert';
// import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Team from './components/Team/Team';
import Privacy from './components/Privacy/Privacy';
import NotFound from './components/NotFound/NotFound';
import Upload from './containers/Upload/Upload';
import Home from './components/Home/Home';
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column parent">
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/team" component={Team} />
            {/* <Route exact path="/upload" component={Upload} /> */}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
