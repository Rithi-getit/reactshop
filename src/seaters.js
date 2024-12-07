import React from 'react';
import './seaters.css';
import Cart from './cart.js';

const Seaters = () => {
    const items = [
        { id:1,
        name:'Empress Recliner - 1 Seater - Velvet Blue',
        imgUrl: 'https://wakefitdev.gumlet.io/img/sofa-sets/lifestyle/WRCLEMPN1FVBL.jpg?w=1200',
        color:'blue',
        price : '$ 16.7'},
        
        { id:2,
        name: 'Gravita High Back Office Chair (White and Grey) : DIY (Do-It-Yourself )Assembly', 
        imgUrl: 'https://wakefitdev.gumlet.io/img/chairs/office-chair/WSCHRGRAVIHBNBWYWEGY_1.jpg?w=1200',
        color:'white and grey',
        price : '$ 9.1'},
        
        {  id: 3, 
            name: 'Full Back Lounge Chairs - Damaro Velvet Full Back Lounge Chair In Black & White Colour -', 
            imgUrl: 'https://th.bing.com/th?id=OPAC.3avxx22sIDmSGw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1',
            color:'black and white',
            price: '$ 30.1'}
            ];
            
return (
        <div className="d flex flex-grid container">
            <h1>Seat Categories</h1>
            <title> SEATERS</title>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="seat-item">
                        <img src={item.imgUrl} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Color: {item.color}</p>
                        <p>Price: {item.price}</p>
                        <button className = "add to cart" onClick = {()=> <AddToCart/>} >ADD TO CART</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default Seaters;
