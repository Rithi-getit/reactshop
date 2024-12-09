import React, {useState} from 'react';
import './cart.css';
import Categories from './categories';

  export const AddToCart = (item, cart, setCart) => {

      setCart ((prevState) => {
        const updatedCart = [...prevState];
        const ItemIndex = updatedCart.findIndex((product) => product.id ===item.id);


        if (ItemIndex > -1) {
            updatedCart[ItemIndex].quantity += 1;
        }
        else {
            updatedCart.push({...item,quantity:1});
        }
        return updatedCart;
 }
 ) 
};

const Cart = () => {

  const [cart,setCart] = useState([]);

 const RemoveItem = (product) => {
    setCart((prevState) => prevState.filter((product) => product.id !== item.id));
 };

 const increaseQt = (product) => {
    setCart((prevState) => 
      prevState.map((item) => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

const decreaseQt = (product) => {
    setCart((prevState) => 
        prevState.map ((item) =>
            item.id === product.id ? {...item,quantity: item.quantity -1 } : item
        )
);
};

  return (
    <>
    <div className = "title">
        YOUR CART
    </div>
    <div>
     {
        cart.map((item) => (
            <li key = {item.id}>
                {item.name}
                {item.img}
                {item.price}
                {item.price}
            Qt: {item.quantity}
            Cost: {item.price}*{item.quantity} 
            <button className = "RemoveItem" onClick = {() => RemoveItem(item)}>
                Remove Item
            </button>
            <button className = "increaseQt" onClick = {() => increaseQt(item)}>
            +
        </button>
        <button className = "decreaseQt" onClick = {() => decreaseQt(item)}>
        -
    </button>
        </li>))}
     </div>

     <div>
        <button className = "backtoshop" onClick = {() => <Categories/>}> BACK TO STORE</button>
     </div>
</> );

};

export default Cart;
