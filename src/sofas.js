import React from './react';
import './sofas.css';

const Sofas = () => {
    const items = [
        { id:1,
        name:'Napper L Shape Sofa Set (3 Seater + Left Aligned Chaise)',
        imgUrl: 'https://wakefitdev.gumlet.io/img/sofa-sets/napper/sectional/lifestyle/lc/LATC.jpg?w=1200',
        color: 'black',
        price : '$ 48'},
        
        { id:2,
            name:'Havana Sofa Set (3+2) Reflection Yellow',
            imgUrl: 'https://wakefitdev.gumlet.io/img/sofa-sets/havana/regular/32/FRYL/1.jpg?w=1200',
            color: 'yellow',
            price : '$52'},
        
        {  id: 3, 
            name: 'Modern RHS Sectional Sofas - Montez Velvet RHS Sectional Sofa (2 + Lounger)', 
            imgUrl: 'https://th.bing.com/th?id=OPAC.z7hBgTV0Y5LgnA474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1',
            color: 'green',
            price : '$59'
           }
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
export default Sofas;