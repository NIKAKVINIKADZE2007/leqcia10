import React, { useEffect, useState } from 'react';
import apiRequest from './apiRequest';

function App() {
  // const [loading, setLoading] = useState(false);
  // const [pizzas, setPizzas] = useState([]);
  // const [error, setError] = useState('');
  // //Get Pizza
  // const fetchPizzas = async () => {
  //   const url = 'http://localhost:3500/items';
  //   setLoading(true);
  //   const data = await apiRequest(url);
  //   setLoading(false);

  //   if (data.error) {
  //     setError(data.error);
  //   } else {
  //     setPizzas(data);
  //   }
  // };

  // //delete Pizza
  // const deletePizza = async (id) => {
  //   const url = `http://localhost:3500/items/${id}`;
  //   const options = {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //   };

  //   const data = await apiRequest(url, options);

  //   if (data.error) {
  //     setError(data.error);
  //   } else {
  //     setPizzas((prev) => prev.filter((pizza) => pizza.id !== id));
  //   }
  // };

  // //Put request

  // const editPizzaPrice = async (id, newPrice) => {
  //   const url = `http://localhost:3500/items/${id}`;

  //   const options = {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ price: newPrice }),
  //   };

  //   const data = await apiRequest(url, options);

  //   if (data.error) {
  //     setError(data.error);
  //   } else {
  //     setPizzas((prevPizza) => {
  //       // array . map , id:2, name:Margherita
  //       prevPizza.map((pizza) =>
  //         //  2    === 2
  //         pizza.id === id ? { ...pizza, price: newPrice } : pizza
  //       );
  //     });
  //   }
  // };

  // useEffect(() => {
  //   fetchPizzas();
  // }, []);

  // return (
  //   <>
  //     <ul>
  //       {pizzas.map((pizza) => (
  //         <li key={pizza.id}>
  //           <h1>{pizza.name}</h1>
  //           <p>size: {pizza.size}</p>
  //           <p>price: ${pizza.price}</p>
  //           <p>
  //             ingredients
  //             {pizza.ingredients
  //               ? pizza.ingredients.join(', ')
  //               : 'No ingredients listed'}
  //           </p>
  //           <button
  //             onClick={() => {
  //               deletePizza(pizza.id);
  //             }}
  //           >
  //             remove
  //           </button>
  //           <button
  //             onClick={() => {
  //               editPizzaPrice(pizza.id, Number((pizza.price + 1).toFixed(2)));
  //             }}
  //           >
  //             add price
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return <></>;
}

export default App;
