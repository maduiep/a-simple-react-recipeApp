import React, { Component } from 'react';
import Recipe from './Recipe'
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title="Pasta"
          ingredients={['Floor', 'Water']}
          instructions="Mix ingredients"
          img="dinner.jpg"
        />
      </div>
    )
  }
}

export default RecipeApp;
