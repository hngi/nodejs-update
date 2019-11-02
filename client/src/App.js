import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/Alert/Alert";
import Footer from "./components/Footer/Footer";
import Routes from './components/Routes/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column parent">
          <Alert />
          <Switch>
            
            <Routes/>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
