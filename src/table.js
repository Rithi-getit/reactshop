import React from 'react';
import './tables.css';
import Cart from './cart.js';

const Tables = () => {
    const items = [
        { id:1,
        name:'Simsim-Ginamon (6 seater) (with Cushion-Omega Pearl)-Natural Sheesham Wood Dining Set',
        imgUrl: 'https://wakefitdev.gumlet.io/img/dining/sets/ginamon-6S/1.jpg?w=1200',
         seater: '8 seater',
        price : '$ 41.6'},
        
        { id:2,
        name: 'Melissa Metal Engineered wood 6 seater Dining set (White ash wood finish)', 
        imgUrl: 'https://wakefitdev.gumlet.io/img/npl_modified_images/Diningset_melissa/Dineset_WDINEMLSAS6WA/Dineset_WDINEMLSAS6WA_1.jpg?w=3056',
        seater: '4 seater',
            price : '$ 24.5'},
        
        {  id: 3, 
            name: 'Nilkamal Aristo Solid Wood 6 Seater Dining Set (Walnut / Black)', 
            imgUrl:'https://www.nilkamalfurniture.com/cdn/shop/products/ARISTO6SWIthchairLS.jpg?v=1674025045&width=720',
            seater: '6 seater',
            price : '$ 29.8'},
            ];
            
return (
        <div className="d flex flex-grid container">
            <h1>Table Categories</h1>
            <title> TABLES</title>
            <ul>
                {items.map((item) => (
                    <li key={item.id} className="tables-item">
                        <img src={item.imgUrl} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>Seater: {item.seater}</p>
                        <p>Price: {item.price}</p>
                        <button className = "add to cart" onClick = {()=> <AddToCart/>} >ADD TO CART</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};
export default Tables;
