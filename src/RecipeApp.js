import React, { Component } from 'react';
import Recipe from './Recipe'
import './RecipeApp.css';
import RecipeInput from './RecipeInput'
import RecipeList from './RecipeList'
import Navbar from './Navbar'

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Nigerian Shawarma',
          instructions: 'Mix Ingredients',
          ingredients: [
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
          ],
          img: 'dinner.jpg'
        },
        {
          id: 1,
          title: 'Burger',
          instructions: 'Mix Ingredients',
          ingredients: [
            'Divide the beef into 4 equal portions. Press a cube of pepper jack into the center of each and shape the meat around the cheese; form into patties, about 4 inches wide and 3/4 inch thick. Season the patties with salt and pepper. ',
            'Heat the vegetable oil in a large skillet over medium-high heat. Add the patties and cook until browned on the bottom, about 4 minutes. Flip the patties and top each with a slice of Cheddar; cook 4 to 5 more minutes. ',
            'Meanwhile, toast the hamburger buns and spread with ketchup, mustard and/or mayonnaise. Fill with the burgers and top with lettuce, tomato and/or red onion. Serve with pickles. '
          ],
          img: 'burger.jpg'
        },
        {
          id: 2,
          title: 'Strawberry Ice Cream',
          instructions: 'I used whole milk and half and half (instead of cream). No food coloring. Used frozen strawberries that I thawed. Blended all with a wand blender before I put it in the ice cream maker',
          ingredients: [
            '2 cups whole milk',
            '2 cups heavy cream',
            '1 cup white sugar',
            '¼ teaspoon salt',
            '2 teaspoons vanilla extract',
            '2 cups mashed fresh strawberries',
            '2 drops red food coloring'
          ],
          img: 'strawberry.jpg'
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId }
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id)
    this.setState({recipes})
  }


  render() {
    const { showForm } = this.state
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({ showForm: true })} />
        {showForm ?
          <RecipeInput
            onSave={this.handleSave}
            onClose={() => this.setState({ showForm: false })}
          /> :
          null}
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    )
  }
}

export default RecipeApp;
