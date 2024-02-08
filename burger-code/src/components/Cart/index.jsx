const Cart = ({ cart }) => {
  return (
    <>
      <h1>CARRINHO</h1>
      <ul>
        {cart.map(({ id, img, name, price, category }) => (
          <li key={id}>
            <img src={img} alt={`Foto ${name}`} />
            <div>
              <div>
                <h1>{name}</h1>
                <span>{price}</span>
              </div>
              <p>{category}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
