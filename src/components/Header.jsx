import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  const showOrders = () => {
    let summa = 0;
    props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
    return (
      <div>
        {props.orders.map((el) => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}

        <p className="summa">Сумма: {summa}$</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    );
  };

  return (
    <header>
      <div>
        <span className="logo">PRIME-мебель</span>
        <ul className="nav">
          <li>
            <a href="#about-us">Про нас</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
          <li>
            <a href="#registr">Регистрация</a>
          </li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((prev) => !prev)}
          className={`shop-cart-button ${cartOpen ? "activ" : ""}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}

export default Header;
