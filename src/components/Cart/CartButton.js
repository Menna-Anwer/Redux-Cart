import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux'
import { toggle } from '../../Store/Slices/uiSlice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const {totalQuantity} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const toggleHandler = () => {
    dispatch(toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
