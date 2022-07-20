import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton.jsx";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A lot of food" />
      </div>
    </Fragment>
  );
};

export default Header;
