import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CartItem } from './CartItem';
import mockProdutos from '../../mock/product_mock';

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsArray = [];

  let totalValor = 0;

  for (const itemId in cartItems) {
    const product = mockProdutos.find(p => p.id === Number(itemId));
    if (product) {
      const itemTotal = product.valor * cartItems[itemId];
      totalValor += itemTotal;
      cartItemsArray.push({ id: Number(itemId), amount: cartItems[itemId], ...product });
    }
  }

  return (
    <section className='cart-products'>
      {cartItemsArray.map((product) => (
        <CartItem {...product} key={`key_${product.id}`} />
      ))}
      <div className="total-valor">
        <strong>Total: ${totalValor.toFixed(2)}</strong>
      </div>
    </section>
  );
};

export { CartProducts };
