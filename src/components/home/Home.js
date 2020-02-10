import React, { Component } from 'react'
import RecipeList from '../recipes/RecipeList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
class Home extends Component {
  render() {
    const { recipes, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="home container">
        <div className="row">
          <div className="col s12 m6">
            <RecipeList recipes={recipes} />
          </div>
          <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recipes: state.firestore.ordered.recipes,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Home)