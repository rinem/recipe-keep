import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home'
import RecipeDetails from './components/recipes/RecipeDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateRecipe from './components/recipes/CreateRecipe'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'component={Home} />
          <Route path='/recipe/:id' component={RecipeDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateRecipe} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
