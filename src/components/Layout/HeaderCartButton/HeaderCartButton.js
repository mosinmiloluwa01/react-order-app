import CartIcon from "../../Cart/CartIcon";

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  return ( 
  <button className={classes.icon}>
    <span className={classes.svgSpan}> <CartIcon/></span>
    <span className={classes.textSpan}>Your Cart</span>
    <span className={classes.badge}>3</span>
  </button>
  )
}

export default HeaderCartButton;