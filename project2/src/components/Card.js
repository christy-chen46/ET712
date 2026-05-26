import { useState } from 'react';
import ModalWindow from './ModalWindow';

function Card({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    document.body.classList.add('modal-open');
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    document.body.classList.remove('modal-open');
    setOpenModal(false);
  };

  return (
    <>
      <div className='card'>
        <img src={product.image} alt={product.title} />

        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <h3>${product.price}</h3>

        <input
          type='number'
          min='1'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={() => addToCart(product, quantity)}>
          Add To Cart
        </button>

        <button onClick={handleOpenModal}>
          View Details
        </button>
      </div>

      {openModal && (
        <ModalWindow
          title={product.title}
          image={product.image}
          description={product.longDescription}
          closeModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default Card;