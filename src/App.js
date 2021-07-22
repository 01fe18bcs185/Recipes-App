import React from "react";
import { RecipesState } from './context/RecipesContext';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Nav from './components/Nav';
import Hero from './components/Hero';
import FullRecipe from './components/FullRecipe';
import './App.css';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <RecipesState>
      <Router>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/recipes" component={Hero} />
        <Route path="/recipes/:id" component={FullRecipe} />
      </Router>
    </RecipesState> 
  );
};

export default App;
