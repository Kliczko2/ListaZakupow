import React, { useState } from 'react';

function ListaPrzedmiotow() {
  const [karta, setCart] = useState([]);

  function dodajPrzedmiot(e) {
    const przedmiot = e.target.value;
    console.log(przedmiot);
    setCart([...karta, przedmiot]);
  }

  return (
    <div className="app">
      <div className="items">
        <button value="MacBook Pro" onClick={addItemToCart}> MacBook Pro</button>
        <button value="iPhone XS" onClick={addItemToCart}>iPhone XS</button>
        <button value="Gem" onClick={addItemToCart}> Gem</button>
        <button value="Teddy Bear" onClick={addItemToCart}> Teddy Bear</button>
      </div>
      <div className="cart">
        Cart
        <ul>
          {cart.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingCart;