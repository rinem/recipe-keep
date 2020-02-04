import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const RecipeDetails = (props) => {
  const { recipe } = props;
  if (recipe) {
    return (
      <div className="container section recipe-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{ recipe.title }</span>
            <p>{ recipe.content }</p>
          </div>
          <div className="card-action white-text">
            <div>Posted by { recipe.authorFirstName } { recipe.authorLastName }</div>
            <div>2nd September, 5am</div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container center">
        <p>Loading...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const recipes = state.firestore.data.recipes;
  const recipe = recipes ? recipes[id] : null
  return {
    recipe
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes'}
  ])

)(RecipeDetails)