import './App.css';
import NavBar from './components/nav-bar';
import { PRODUCTS } from './constants/data/products';
import Card from './components/product-card';

function App() {
  return (
    <div className="App">
     <NavBar />

     <div className='products-container'>
          {PRODUCTS.map((product) => (
            <Card product={product} key={product.name} />
          ))}
        </div>

    </div>
  );
}

export default App;
