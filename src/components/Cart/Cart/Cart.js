import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = 
  <ul>
    {[{id: 'c1', name: 'sushi', amount: 2, price: 10.99}].map(item => <li>{item.name}</li>)}
  </ul>
  return (
    <div>
      {cartItems}
      <div></div>
      <div></div>
    </div>
  )
}

export default Cart