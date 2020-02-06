import React from 'react'
import moment from 'moment'

const RecipeSummary = ({recipe}) => {
  return (
    <div className="card z-depth-0 recipe-summary">
      <div className="card-content white-text text-darken-3">
        <span className="card-title ">{recipe.title}</span>
        <p>Posted by  {recipe.authorFirstName} {recipe.authorLastName}</p>
        <p className="white-text">{moment(recipe.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default RecipeSummary