import Item from '../components/Item'; 
import { useSelector, useDispatch } from 'react-redux';
import {storeActions} from '../store/indexRedux'; 
const Cart = props => {
  const dispatch = useDispatch(); 
  const cartItems = useSelector(state => state.storeState.cartItems); 
  const handleClick = (item) => dispatch(storeActions.removeFromCart({item:item}));
  return (
    <article className="cart">
        {cartItems.map(item => <Item key={item.id} name={item.name} price={item.price} onClick={handleClick.bind(null, item)} />)}
    </article>
  ); 
};
export default Cart; 