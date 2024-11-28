import React from 'react';
import './categories.css';

function Categories() {

  return (
    <>
      <div className="container">
        <div className="title"><b>SHOP BY CATEGORIES</b></div>
        <div>
          <button className="cart">
          <img
            src='https://th.bing.com/th/id/R.9b56f49535da14e4a286c15c1d084064?rik=U3QBU%2fCNqQgKbg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fshopping_cart%2fshopping_cart_PNG36.png&ehk=79x16Ik092uWWuL4iImQ9J2Ek8Q%2fBXdVZGfmOB%2blhO4%3d&risl=&pid=ImgRaw&r=0'
            width="50px"
            height="50px"
            alt="Shopping Cart"
          />
          </button>
        </div>
      </div>
      <br />
      <div className="container1">
        <div className="bedbox">
          <img
            src='https://th.bing.com/th/id/OIP.5dYCGHzL2GBDuo_EnyXPMgAAAA?rs=1&pid=ImgDetMain'
            width="300px"
            height="300px"
            alt="Beds"
          />
          BEDS
          <button onClick={() => <Beds/>}>DISCOVER YOUR COMFORT</button>
        </div>
        <br />
        <div className="sofabox">
          <img
            src='https://th.bing.com/th/id/OIP.VYNr6HpneenEWC0nAwvszwHaJ3?rs=1&pid=ImgDetMain'
            width="300px"
            height="300px"
            alt="Sofa"
          />
          SOFA
          <button onClick={() => <Sofas/>}>DISCOVER YOUR COMFORT</button>
        </div>
        <br />
        <div className="tablebox">
          <img
            src='https://www.decornation.in/wp-content/uploads/2020/03/solid-wood-dining-table-1.jpg'
            width="300px"
            height="300px"
            alt="Dining Tables"
          />
          DINING TABLES
          <button onClick={() => <Tables/>}>DISCOVER YOUR COMFORT</button>
        </div>
        <br />
        <div className="seatbox">
          <img
            src='https://i.pinimg.com/originals/df/f9/48/dff9486f8666a28705b4edd71533d8fe.jpg'
            width="300px"
            height="300px"
            alt="Seaters"
          />
          SEATERS
          <button onClick={() => <Seaters/>}>DISCOVER YOUR COMFORT</button>
        </div>
      </div>
    </>
  );
}

export default Categories;





























































