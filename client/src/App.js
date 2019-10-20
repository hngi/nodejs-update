import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/Alert/Alert';
import Landing from './containers/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Privacy from './components/Privacy/Privacy';
import Footer from './components/Footer/Footer';
// import DownloadComplete from './components/DownloadComplete/DownloadComplete'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          {/* <Route path='http://localhost:4000/:code' component={DownloadComplete} /> */}
          <Route path='/privacy' component={Privacy} />
          <Route path='/' component={Landing} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
