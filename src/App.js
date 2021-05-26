import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './components/Main'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Route path='/' exact component={Login} />
          <Route path='/dash' component={Main} />
        </Router>
      </div>
    )
  }
}

export default App