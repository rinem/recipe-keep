import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRecipe } from '../../store/actions/recipeActions'
import { Redirect } from 'react-router-dom'
class CreateRecipe extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRecipe(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="form-in" onSubmit={this.handleSubmit}>
          <h5 className="white-text text-darken-3">Create a New Recipe</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Recipe Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Recipe Body</label>
          </div>
          <div className="input-field">
            <button className="btn">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}


export default  connect(mapStateToProps, mapDispatchToProps)(CreateRecipe)