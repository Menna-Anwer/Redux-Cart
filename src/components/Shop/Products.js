import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS =[
  {
    id: 1,
    title :"product 1",
    price : 4,
    description:"This is a first product - amazing!"
  },{
    id: 2,
    title :"product 2",
    price : 5,
    description:"This is a 2 product - amazing!"
  },{
    id: 3,
    title :"product 3",
    price : 6,
    description:"This is a 3 product - amazing!"
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((prod)=>
         <ProductItem
         key={prod.id}
         id={prod.id}
         title={prod.title}
         price={prod.price}
         description={prod.description}
       />)}
       
      </ul>
    </section>
  );
};

export default Products;
