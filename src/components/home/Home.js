import React, { Component } from 'react'
import RecipeList from '../recipes/RecipeList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
class Home extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="home container">
        <div className="row">
          <div className="col s12 m6">
            <RecipeList recipes={recipes} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recipes: state.firestore.ordered.recipes
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
  ])
)(Home)