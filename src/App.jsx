import "./App.css";
import { useState } from "react";
function App() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
  setCartCount(cartCount + 1);
};
  return (
    <div>
      <nav className="navbar">
        <h2>Golden Crust</h2>

        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart ({cartCount})</li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Freshly Fried, Freshly Baked</h1>
        <p>Delicious snacks and bakery items made every day.</p>
        <button>Order Now</button>
      </div>

      <div className="products">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
            alt="Samosa"
          />
          <h3>Samosa</h3>
          <p>₹20</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://carveyourcraving.com/wp-content/uploads/2021/11/veg-puff-recipe.jpg"
            alt="Veg Puff"
          />
          <h3>Veg Puff</h3>
          <p>₹30</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            alt="Chocolate Cake"
          />
          <h3>Chocolate Cake</h3>
          <p>₹250</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg"
            alt="Donut"
          />
          <h3>Donut</h3>
          <p>₹60</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e"
            alt="Cupcake"
          />
          <h3>Cupcake</h3>
          <p>₹80</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
            alt="Croissant"
          />
          <h3>Croissant</h3>
          <p>₹90</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="card">
          <img
            src="https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg"
            alt="Cookies"
          />
          <h3>Cookies</h3>
          <p>₹120</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>

        <div className="card">
          <img
             src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
            alt="Brownie"
          />
          <h3>Brownie</h3>
          <p>₹100</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
