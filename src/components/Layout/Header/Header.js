import React from "react";

import mealsImage from '../../../assets/images/meals.jpg';
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from './Header.module.css';

const Header = props => {
  return(
    <div className={classes['header-container']}>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
        {/* <button type="button" className={classes.button}>Cart</button> */}
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='table full of stuff'/>
      </div>
    </div>
  )
}

export default Header