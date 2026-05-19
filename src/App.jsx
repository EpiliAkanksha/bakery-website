import "./App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    samosa: 0,
    puff: 0,
    cake: 0,
    donut: 0,
    cupcake: 0,
    croissant: 0,
    cookies: 0,
    brownie: 0,
  });
  const prices = {
  samosa: 20,
  puff: 30,
  cake: 250,
  donut: 60,
  cupcake: 80,
  croissant: 90,
  cookies: 120,
  brownie: 100,
};

  const increaseItem = (item) => {
    setCart({
      ...cart,
      [item]: cart[item] + 1,
    });
  };

  const decreaseItem = (item) => {
    if (cart[item] > 0) {
      setCart({
        ...cart,
        [item]: cart[item] - 1,
      });
    }
  };

  const totalItems =
    cart.samosa +
    cart.puff +
    cart.cake +
    cart.donut +
    cart.cupcake +
    cart.croissant +
    cart.cookies +
    cart.brownie;
    const totalPrice =
    cart.samosa * prices.samosa +
    cart.puff * prices.puff +
    cart.cake * prices.cake +
    cart.donut * prices.donut +
    cart.cupcake * prices.cupcake +
    cart.croissant * prices.croissant +
    cart.cookies * prices.cookies +
    cart.brownie * prices.brownie;

  return (
    <div>
      <nav className="navbar">
        <h2>Golden Crust</h2>

        <ul>
          <li><a href="#">Home</a></li>

          <li><a href="#menu">Menu</a></li>
          
          <li><a href="#about">About</a></li>
          
          <li><a href="#contact">Contact</a></li>
          
          <li>Cart ({totalItems})</li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Freshly Fried, Freshly Baked</h1>
        <p>Delicious snacks and bakery items made every day.</p>
        <button>Order Now</button>
      </div>

      <div id="menu" className="products">

        {/* SAMOSA */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
            alt="Samosa"
          />
          <h3>Samosa</h3>
          <p>₹20</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("samosa")}
          >
          Add to Cart
          </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("samosa")}>-</button>

            <span>{cart.samosa}</span>

            <button onClick={() => increaseItem("samosa")}>+</button>
          </div>
        </div>

        {/* VEG PUFF */}
        <div className="card">
          <img
            src="https://carveyourcraving.com/wp-content/uploads/2021/11/veg-puff-recipe.jpg"
            alt="Veg Puff"
          />
          <h3>Veg Puff</h3>
          <p>₹30</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("puff")}
          >
          Add to Cart
        </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("puff")}>-</button>

            <span>{cart.puff}</span>

            <button onClick={() => increaseItem("puff")}>+</button>
          </div>
        </div>

        {/* CAKE */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587"
            alt="Chocolate Cake"
          />
          <h3>Chocolate Cake</h3>
          <p>₹250</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("cake")}
          >
          Add to Cart
        </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("cake")}>-</button>

            <span>{cart.cake}</span>

            <button onClick={() => increaseItem("cake")}>+</button>
          </div>
        </div>

        {/* DONUT */}
        <div className="card">
          <img
            src="https://images.pexels.com/photos/4686960/pexels-photo-4686960.jpeg"
            alt="Donut"
          />
          <h3>Donut</h3>
          <p>₹60</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("donut")}
          >
          Add to Cart
        </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("donut")}>-</button>

            <span>{cart.donut}</span>

            <button onClick={() => increaseItem("donut")}>+</button>
          </div>
        </div>

        {/* CUPCAKE */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e"
            alt="Cupcake"
          />
          <h3>Cupcake</h3>
          <p>₹80</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("cupcake")}
          >
          Add to Cart
        </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("cupcake")}>-</button>

            <span>{cart.cupcake}</span>

            <button onClick={() => increaseItem("cupcake")}>+</button>
          </div>
        </div>

        {/* CROISSANT */}
        <div className="card">
          <img
            src="https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg"
            alt="Croissant"
          />
          <h3>Croissant</h3>
          <p>₹90</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("croissant")}
          >
          Add to Cart
        </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("croissant")}>-</button>

            <span>{cart.croissant}</span>

            <button onClick={() => increaseItem("croissant")}>+</button>
          </div>
        </div>

        {/* COOKIES */}
        <div className="card">
          <img
            src="https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg"
            alt="Cookies"
          />
          <h3>Cookies</h3>
          <p>₹120</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("cookies")}
          >
          Add to Cart
        </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("cookies")}>-</button>

            <span>{cart.cookies}</span>

            <button onClick={() => increaseItem("cookies")}>+</button>
          </div>
        </div>

        {/* BROWNIE */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
            alt="Brownie"
          />
          <h3>Brownie</h3>
          <p>₹100</p>
          <button
          className="add-btn"
          onClick={() => increaseItem("brownie")}
          >
          Add to Cart
        </button>

          <div className="quantity">
            <button onClick={() => decreaseItem("brownie")}>-</button>

            <span>{cart.brownie}</span>

            <button onClick={() => increaseItem("brownie")}>+</button>
          </div>
        </div>
      </div>
      {totalItems > 0 && (
        <div className="summary">
          <h2>Order Summary</h2>
      
          {cart.samosa > 0 && (
            <p>Samosa x {cart.samosa} = ₹{cart.samosa * prices.samosa}</p>
          )}
      
          {cart.puff > 0 && (
            <p>Veg Puff x {cart.puff} = ₹{cart.puff * prices.puff}</p>
          )}
      
          {cart.cake > 0 && (
            <p>Chocolate Cake x {cart.cake} = ₹{cart.cake * prices.cake}</p>
          )}
      
          {cart.donut > 0 && (
            <p>Donut x {cart.donut} = ₹{cart.donut * prices.donut}</p>
          )}
      
          {cart.cupcake > 0 && (
            <p>Cupcake x {cart.cupcake} = ₹{cart.cupcake * prices.cupcake}</p>
          )}
      
          {cart.croissant > 0 && (
            <p>Croissant x {cart.croissant} = ₹{cart.croissant * prices.croissant}</p>
          )}
      
          {cart.cookies > 0 && (
            <p>Cookies x {cart.cookies} = ₹{cart.cookies * prices.cookies}</p>
          )}
      
          {cart.brownie > 0 && (
            <p>Brownie x {cart.brownie} = ₹{cart.brownie * prices.brownie}</p>
          )}
      
          <h3>Total: ₹{totalPrice}</h3>
        </div>
      )}
      {totalItems > 0 && (
        <div className="payment-section">
          <h2>Would you like to add more items?</h2>

          <button className="continue-btn">
            Continue Shopping
          </button>

          <button className="payment-btn">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
