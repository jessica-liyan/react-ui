import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom'

import './app.scss'

import {ButtonDoc} from './docs/ButtonDoc'
import {RadioDoc} from './docs/RadioDoc'
import {CheckboxDoc} from './docs/CheckboxDoc'
import {SwitchDoc} from './docs/SwitchDoc'

const routes = [{
  path: "/button",
  component: ButtonDoc
}, {
  path: "/radio",
  component: RadioDoc
}, {
  path: "/checkbox",
  component: CheckboxDoc
}, {
  path: "/switch",
  component: SwitchDoc
}]

class App extends React.Component{
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <div className="app">
          <div className="app-nav">
          {
            routes.map((route, idx) => (
              <NavLink to={route.path} key={idx} exact><i>{route.path.substr(1)}</i></NavLink>
            ))
          }
          </div>
          <div className="app-main">
            <Switch>
              {
                routes.map((route, idx) => (
                  <Route path={route.path} component={route.component} key={idx}/>
                ))
              }
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
)


