import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import './index.scss'
import { CartProducts } from './CartProducts'
const CartOverlay = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)
    return (
        <div className={isCartOpen ? "cartOverlay" : "none"} >
            <section onClick={() => setIsCartOpen(false)} className='overlay'></section>
            <section className='cart'>
                <div >
                    <p>Minha Sacola</p>
                    <button>
                        <p onClick={() => setIsCartOpen(false)}>X</p>
                    </button>
                </div>
                <CartProducts />
            </section>
        </div>

    )
}

export { CartOverlay }