import React, { useState } from 'react';
import { useMyContext } from '../state/MyContext';

function DrinkDetails({ drink }) {
  const { state, dispatch } = useMyContext();

  const selected = (item) => {
    dispatch({
      type: 'UPDATE_DRINK',
      payload: item,
    });
  };


  return (
    <div className="drink-details">
      <h2>{drink.strDrink}</h2>
      <div className="drink-info">
        <img className="drinkImg" onClick={(e) => selected(drink)} width={200} src={drink.strDrinkThumb} alt={drink.strDrink} />
        <div className="drink-properties">
          <p><strong>Category:</strong> {drink.strCategory}</p>
          <p><strong>Alcoholic:</strong> {drink.strAlcoholic}</p>
          <p><strong>Glass Type:</strong> {drink.strGlass}</p>
          <p><strong>Drink ID:</strong> {drink.idDrink}</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {getIngredients(drink).map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function getIngredients(drink) {
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredientKey = 'strIngredient' + i;
    const ingredient = drink[ingredientKey];
    if (ingredient) {
      ingredients.push(ingredient);
    } else {
      break;
    }
  }
  return ingredients;
}

export default DrinkDetails;
