import React, { Component } from 'react'
import Recipe from './Recipe'
import PropTypes from 'prop-types'
import './RecipeList.css'

class RecipeList extends Component {
 static defaultProps = {
  recipes: [
   {
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
  ]
 }

 static propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object)
 }

 render() {
  const recipes = this.props.recipes.map((r, index) => (
   <Recipe key={index} {...r} />
  ))

  return (
   <div className='recipe-list'>
    {recipes}
   </div>
  )
 }
}

export default RecipeList;