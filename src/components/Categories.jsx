import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "chairs",
          name: "Стулья",
        },
        {
          key: "tables",
          name: "Столы",
        },
        {
          key: "sofa",
          name: "Диваны",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((category) => (
          <div
            key={category.key}
            onClick={() => this.props.chooseCategory(category.key)}
          >
            {category.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
