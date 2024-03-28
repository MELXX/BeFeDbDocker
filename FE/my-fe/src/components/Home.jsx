import '../css/home.css'
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    height: '',
    weight: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
      
      fetch('http://localhost:8000/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          alert('Failed to create user');
        }else{
          alert('user created');
        }
      })
      .catch(error => {
        alert('Error creating user:');
      });
  };

  return (
    
    <div className="form-container">
      <h2>Create Person</h2>
      <form onSubmit={handleSubmit} className="person-form">
        <label>
          User ID number:
          <input type="text" name="id" value={formData.id} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <label>
          Height:
          <input type="number" name="height" value={formData.height} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <label>
          Weight:
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} className="form-input" />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Home;
