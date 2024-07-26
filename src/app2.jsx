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
//     // db.json
//     setPizzas((prevPizza) =>
//       // array . map , id:2, name:Margherita
//       prevPizza.map((pizza) =>
//         //  2    === 2
//         pizza.id === id ? { ...pizza, price: newPrice } : pizza
//       )
//     );
//   }
// };

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
//     setPizzas((pizza) =>
//       pizza.id === id ? { ...pizza, price: newPrice } : pizza
//     );
//   }
// };
