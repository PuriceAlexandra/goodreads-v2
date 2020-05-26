import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from '../components/app'
import DashboardLogin from '../components/login'
import DashboardRegister from '../components/register'
import AuthChck from '../containers/auth-checker'

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" render={(props) => <AuthChck><App {...props} /></AuthChck>} />
          <Route
            exact
            path="/login"
            render={(props) => <AuthChck><DashboardLogin {...props} /> </AuthChck>}
          />
          <Route
            exact
            path="/register"
            render={(props) => <DashboardRegister {...props} />}
          />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.shape({}).isRequired,
}

export default Routes
