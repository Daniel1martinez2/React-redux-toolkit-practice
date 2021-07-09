import Item from '../components/Item'; 

import { useSelector, useDispatch } from 'react-redux';
import {storeActions} from '../store/indexRedux'; 

const ItemsStock = props => {
  const dispatch = useDispatch(); 
  const items = useSelector(state => state.storeState.stockItems); 

  const handleItemClick = (item) => dispatch(storeActions.addToCart({item:item}));
  return (
    <article className="item-stock">
      {
        items.map(
          item => (
            <Item 
              key={item.id} 
              name={item.name} 
              price={item.price} 
              onClick={handleItemClick.bind(null,item)} 
            />
          )
        )
      }
    </article>
  ); 
}; 

export default ItemsStock; 
