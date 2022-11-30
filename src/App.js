import './App.css';
import NavBar from './components/nav-bar';
import { PRODUCTS } from './constants/data/products';
import Card from './components/product-card';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar />

     <ItemListContainer />

     <div className='products-container'>
          {PRODUCTS.map((product) => (
            <Card product={product} key={product.name} />
          ))}
        </div>

    </div>
  );
}

export default App;
