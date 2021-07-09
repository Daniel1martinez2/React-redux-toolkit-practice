import { useSelector } from "react-redux";
const Bill = props => {
  const amount = useSelector(state => state.storeState.billAmount); 
  const cartItems = useSelector(state => state.storeState.cartItems); 
  console.log(amount);
  return (
    <aside className="bill" >
      <h1>Bill</h1>
      {cartItems.map(item => <p key={item.id}>{`${item.name}.........${item.price}$`}</p>)}
      <h2>Total <strong>{amount}</strong> </h2>
    </aside>
  ); 
}; 
export default Bill;