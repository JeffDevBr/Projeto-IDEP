import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import './index.scss'
import { CartProducts } from './CartProducts'

const CartOverlay = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)
    return (
        <div className={isCartOpen ? "cartOverlay" : "none"} >
            <section onClick={() => setIsCartOpen(false)} className='overlay'></section>
            <section className='cart'>
                <div className='cartOverlay-header' >
                    <p>Meu Carrinho</p>
                    <button className='btn-button'>
                        <span onClick={() => setIsCartOpen(false)}> <i className="fa-solid fa-xmark"></i></span>
                    </button>
                </div>
                <CartProducts />
            </section>
        </div>

    )
}

export { CartOverlay }