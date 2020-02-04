import React from 'react'

const RecipeSummary = ({recipe}) => {
  return (
    <div className="card z-depth-0 recipe-summary">
      <div className="card-content white-text text-darken-3">
        <span className="card-title ">{recipe.title}</span>
        <p>Posted by Rinem</p>
        <p className="white-text">3rd September, 5am</p>
      </div>
    </div>
  )
}

export default RecipeSummary