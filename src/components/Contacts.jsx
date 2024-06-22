import React, { Component } from "react";

export class Contacts extends Component {
  render() {
    return (
      <div id="contacts">
        <h2>Мебельная фабрика "PRIME-МЕБЕЛЬ"</h2>
        <span>Кыргызская Республика, г. Бишкек, ул. Айтматова, 4а</span>
        <h2>ТЕЛЕФОН</h2>
        <span>+996 (312) 00-70-70; +996 (551) 77 00 00</span>
        <h2> E-MAIL</h2>
        <span>prime-mebel@gmail.com</span>
        <h2>ВРЕМЯ РАБОТЫ</h2>
        <span>Пн - Пт 9:00 - 17:30; Сб 9:00 - 15:00</span>
      </div>
    );
  }
}

export default Contacts;
