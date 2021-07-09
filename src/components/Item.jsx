const Item = props => {
  return (
    <div className="item" onClick={props.onClick} >
      <h1>{props.name}</h1>
      <h4>{props.price}</h4>
    </div>
  ); 
};
export default Item; 