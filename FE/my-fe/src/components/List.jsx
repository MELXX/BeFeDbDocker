import {React,useEffect,useState} from 'react';
import '../css/table.css'; // Importing CSS file for styling

function List() {
    const [data,dataChanger] = useState([]);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/getCurrentPatrons')
        .then(response =>response.json())
        .then(j => {
            console.log(j)
            dataChanger(j)
        })
        .catch(error => {
          console.error(error);
        });  
      }
      ,[])
    

     
  return (
    <div className="table-container">
      <h2>Alcohol Data</h2>
      <table className="alcohol-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Last Drink</th>
            <th>Last Drink Time</th>
            <th>Alcohol Saturation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.lastDrink}</td>
              <td>{item.lastDrinkTime.split('.')[0]}</td>
              <td style={{ backgroundColor: getBackgroundColor(Math.ceil(item.alcoholSaturation)) }}>{Math.ceil(item.alcoholSaturation)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function getBackgroundColor(alcoholSaturation) {
  if (alcoholSaturation > 75 && alcoholSaturation < 300) {
    return 'yellow';
  } else if (alcoholSaturation > 300) {
    return 'red';
  } else if (alcoholSaturation < 75) {
    return 'green';
  } else {
    return 'transparent';
  }
}

export default List;

