import React from 'react';
import './beds.css';
import Cart from './cart.js';
const Beds = () => {
    const items = [
        { id:1,
        name:'Kepler Queen Size  Upholstered Bed',
        imgUrl: 'https://wakefitdev.gumlet.io/img/npl_modified_images/Kepler/WUWB7860SVSTKEPLR/1.jpg?w=1200',
        dimensions: '78" x 60"', 
        size: 'queen',
        price : '$ 330'},
        
        { id:2,
        name: 'Orion King Size Bed', 
        imgUrl: 'https://th.bing.com/th?id=OPAC.SMtBbvyUJ82SUw474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1',
        dimensions: '80" x 76"', 
        size: 'King',
        price : '$ 520'},
        
        {  id: 3, 
            name: 'Lunar Single Bed', 
            imgUrl: 'https://th.bing.com/th?id=OPAC.aod9DmQ5SnR%2byQ474C474&w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1',
            dimensions: '75" x 36"', 
            size: 'Single',
            price: '$ 125'}
            ];
            
return (
        <div className="d flex flex-grid container">
            <h1>Bed Categories</h1>
            <title> BEDS</title>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="bed-item">
                        <img src={item.imgUrl} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Size: {item.size}</p>
                        <p>Dimensions: {item.dimensions}</p>
                        <p>Price: {item.price}</p>
                        <button className = "add to cart" onCilck = {()=> <AddToCart/>} >ADD TO CART</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default Beds;