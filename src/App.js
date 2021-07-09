import Cart from './components/Cart'; 
import Bill from './components/Bill';
import ItemsStock from './components/ItemsStock';
import './App.css';

function App() {
  return (
    <div className="shop">
      <article className="main">
        <Cart />
        <ItemsStock />
      </article>
      <Bill />
    </div>
  );
}

export default App;
