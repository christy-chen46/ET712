function ModalWindow({ title, image, description, closeModal }) {
  return (
    <div className='modal-overlay' onClick={closeModal}>
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        <button className='close-btn' onClick={closeModal}>
          ✕
        </button>

        <img src={image} alt={title} />

        <h2>{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default ModalWindow;