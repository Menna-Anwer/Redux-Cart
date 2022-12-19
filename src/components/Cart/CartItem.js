import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../Store/Slices/cartSlice';

const CartItem = (props) => {
  const { title, quantity, total, price, id} = props.item;

  const dispatch = useDispatch()
  const addToCart =()=>{
    dispatch(addItemToCart({
      id,
      title,
      price
    }))
  }
  const removeFromCart=()=>{
    dispatch(removeItemFromCart(id))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCart}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
