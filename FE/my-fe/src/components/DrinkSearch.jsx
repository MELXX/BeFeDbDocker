import React, { useState } from 'react';
import DrinkDetails from './DrinkDetails';
import styles from '../css/drinkdetails.module.css'
function DrinkSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [drink, setDrink] = useState(null);
  const [error, setError] = useState(null);


  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (data.drinks && data.drinks.length > 0) {
        setDrink(data.drinks);
        setError(null);
      } else {
        setError('No drink found');
      }
    } catch (error) {
      console.error(error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>

      <div className='form-container'>      
        <h1>Search for a Drink</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter drink name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
      
      <div className="drink-list">
      {drink && drink.map((x, index) => (
        <div className="drink-item" key={index}>
          <DrinkDetails drink={x} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default DrinkSearch;
