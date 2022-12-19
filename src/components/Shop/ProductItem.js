import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Store/Slices/cartSlice';

const ProductItem = (props) => {
  const { title, price, description,id } = props;
  const dispatch = useDispatch()
  const addCartHandler = ()=>{
    dispatch(addItemToCart({
      title, price,id
    }))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
