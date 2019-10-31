import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Team from '../Team/Team';
import Privacy from '../Privacy/Privacy';
import NotFound from '../NotFound/NotFound';
import Upload from '../../containers/Upload/Upload';
import Payment from '../Payment/Payment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const Routes = () => {
  return (
    <div>
      <Router>
        <div className='d-flex flex-column parent'>
          <Navbar />
          {/* <Alert /> */}
          <Switch>
            <Route exact path='/' component={Upload} />
            <Route exact path='/privacy' component={Privacy} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/payment' component={Payment} />
            {/* <Route exact path='/dashboard' component={UserDashboard} /> */}
            <Route component={NotFound} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default Routes
