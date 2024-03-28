import React, { useState,useEffect } from 'react';
import '../css/home.css'
import DrinkSearch from './DrinkSearch';
import { useMyContext } from '../state/MyContext';
import { Alert } from 'bootstrap';

function Order() {

  const { state, dispatch } = useMyContext();

    const [formData, setFormData] = useState({
        drinkId: '',
        userId: '',

    });

    useEffect(() => {
      // This effect will run every time the user object in the global state changes
      setFormData({ ...formData, ['drinkId']: state.drink.idDrink });
    }, [state.drink]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:8000/serveUser/${formData.userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to create user');
            }
            return response.json();
          })
          .then(data => {
            alert('User order created successfully');
          })
          .catch(error => {
            alert('User not found error!!')
          });
    };

    return (
        <>
            <div className="form-container">
                <h2>Record Drink Purchase</h2>
                <form onSubmit={handleSubmit} className="drink-purchase-form">
                    <label>
                        Drink ID:
                        <input type="text" name="drinkId" value={formData.drinkId} onChange={handleChange} className="form-input" />
                    </label>
                    <br />
                    <label>
                        User ID:
                        <input type="text" name="userId" value={formData.userId} onChange={handleChange} className="form-input" />
                    </label>
                    <br />
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
            <DrinkSearch/>
        </>
    );
}

export default Order;
