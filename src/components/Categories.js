import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = () => {
  return (
    <div className="CategoriesBlock">
      {categories.map((c) => (
        <Link
          className="Category"
          key={c.name}
          exact={c.name === "all"}
          to={c.name === "all" ? "/" : `/${c.name}`}
        >
          | {c.text}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
