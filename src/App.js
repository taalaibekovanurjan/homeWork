import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Search from "./components/Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Диван для прихожей",
          img: "divan_dlya_prihojey.jpg",
          desc: "Диван состоит из турецкого материала. Изготовлен в Кыргызстане",
          category: "sofa",
          price: "49,99",
        },
        {
          id: 2,
          title: "Диван",
          img: "divan_myatniy.webp",
          desc: "Диван состоит из плотного материала. Изготовлен в Турции",
          category: "sofa",
          price: "89,99",
        },
        {
          id: 3,
          title: "Кресло",
          img: "kreslo-siniy.webp",
          desc: "Кресло для коридора или прихожей. Изготовлен в Кыргызстане",
          category: "chairs",
          price: "39,99",
        },
        {
          id: 4,
          title: "Кресло и пуфик",
          img: "orang.jpeg",
          desc: "Кресло с пуфиком для коридора или прихожей. Изготовлен в Кыргызстане",
          category: "chairs",
          price: "69,99",
        },
        {
          id: 5,
          title: "Диван",
          img: "divan.jpeg",
          desc: "Диван для зала или гостиной. Изготовлен в Кыргызстане",
          category: "sofa",
          price: "150,99",
        },
        {
          id: 6,
          title: "Кресло",
          img: "kreslo.jpeg",
          desc: "Диван для зала или гостиной. Изготовлен в Кыргызстане",
          category: "chairs",
          price: "40,99",
        },
        {
          id: 7,
          title: "Стол",
          img: "stol.jpeg",
          desc: "Стол письменный. Изготовлен в Узбекистане",
          category: "tables",
          price: "260,99",
        },
        {
          id: 8,
          title: "Журнальный стол",
          img: "jurnal_stol.jpeg",
          desc: "Журнальные столы. Изготовлены в Турции",
          category: "tables",
          price: "260,99",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <div className="top-bar">
          <div>
            <Categories chooseCategory={this.chooseCategory} />
          </div>
          <Search onSearch={this.handleSearch} />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.currentItems}
            onAdd={this.addToOrder}
          />
          {this.state.showFullItem && (
            <ShowFullItem
              onAdd={this.addToOrder}
              onShowItem={this.onShowItem}
              item={this.state.fullItem}
            />
          )}
        </div>

        <AboutUs />
        <Contacts />
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  handleSearch(searchText) {
    if (searchText === "") {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter((el) =>
          el.title.toLowerCase().includes(searchText.toLowerCase())
        ),
      });
    }
  }
}

export default App;
