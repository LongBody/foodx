import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeLayout from '../layouts/client/index'
// import NotFound from './components/notFound'




class Routes extends Component {
 

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeLayout}></Route>
        {/* <Route component={NotFound}></Route> */}
      </Switch>
    )
  }
}


export default Routes