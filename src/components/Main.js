import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import UserProfile from './UserProfile'
import Sidebar from './Sidebar'
import VendorProfile from './VendorProfile'
import Dashboard from './Dashboard'
class Main extends Component {
  render() {
    return (
      <div className="main-panel">
         <Navbar />
        <Router>
        <Sidebar/>
          <Route path="/vendor" component={VendorProfile} />
          <Route path="/user" component={UserProfile} />
          <Route path="/dashboard" component={Dashboard}/>
          <Redirect from='*' to='/dashboard' />
        </Router>
        <Footer/>
      </div>
    )
  }
}

export default Main