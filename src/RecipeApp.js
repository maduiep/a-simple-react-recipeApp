import React, { Component } from 'react';
import Recipe from './Recipe'
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe
          title="Nigerian Shawarma"
          ingredients={[
            '2 Chicken breasts(de-boned/boneless)',
            '6+ Shawarma bread(either pita bread/flour tortilla wraps)',
            '1 small sized Cabbage(cut into thin strips)',
            '3 medium sized Carrots(grated or cut into thin strips)',
            '1 large Cucumber(cut into thin strips&circles)',
            '2 big Tomatoes(cut into thin strips)',
            '1 medium sized Onions(cut into thin strips)',
            'Ketchup',
            'Mayonnaise',
            '1 Tablespoon Vegetable /olive oil(for stir frying)'
          ]}
          instructions="Mix ingredients"
          img="dinner.jpg"
        />
      </div>
    )
  }
}

export default RecipeApp;
