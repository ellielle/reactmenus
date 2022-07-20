import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context.js";
import CartIcon from "../Cart/CartIcon.jsx";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump :
    ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;