import { useState } from 'react';

function Cart({ cart, removeFromCart }) {
  const [showCheckout, setShowCheckout] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: 'Hoboken'
  });

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.0816;

  const total = subtotal + tax;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(`
Order Confirmed!

Name: ${formData.name}
Contact: ${formData.contact}
Pickup Location: ${formData.location}

Total: $${total.toFixed(2)}
    `);

    console.log(formData);
  }

  return (
    <div className='cart-page'>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className='cart-item'>
              <img src={item.image} alt={item.title} />

              <div>
                <h2>{item.title}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>${item.price}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <div className='cart-summary'>
            <h2>Subtotal: ${subtotal.toFixed(2)}</h2>

            <h2>NY Sales Tax (8.16%): ${tax.toFixed(2)}</h2>

            <h1>Total: ${total.toFixed(2)}</h1>

            <button
              className='checkout-btn'
              onClick={() => setShowCheckout(true)}
            >
              Proceed to Checkout
            </button>
          </div>

          {showCheckout && (
            <form className='checkout-form' onSubmit={handleSubmit}>
              <h2>Checkout</h2>

              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type='text'
                name='contact'
                placeholder='Phone or Email'
                value={formData.contact}
                onChange={handleChange}
                required
              />

              <select
                name='location'
                value={formData.location}
                onChange={handleChange}
              >
                <option value='Hoboken'>
                  Hoboken - 123 Washington Street
                </option>

                <option value='Jersey City'>
                  Jersey City - 45 Grove Street
                </option>

                <option value='Manhattan'>
                  Manhattan - 22 Bleecker Street
                </option>
              </select>

              <button type='submit'>
                Confirm Order
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;