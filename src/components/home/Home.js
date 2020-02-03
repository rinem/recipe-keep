import React, { Component } from 'react'
import RecipeList from '../recipes/RecipeList'
import Notifications from './Notifications'

class Home extends Component {
  render() {
    return (
      <div className="home container">
        <div className="row">
          <div className="col s12 m6">
            <RecipeList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Home