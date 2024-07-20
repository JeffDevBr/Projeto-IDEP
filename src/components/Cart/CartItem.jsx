import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { catalogIndexedById } from "../../mock/product_mock"

const CartItem = ({ id, amount }) => {
    const { addToCart, decreaseUnit, removeFromCart } = useContext(CartContext)
    const { img, nome, valor } = catalogIndexedById[id]
    return (
        <article className="cart-item">
            <img src={img}
                alt={`Imagem do produto.`}
            />

            <button className="btn-button position-button">
                <span onClick={() => removeFromCart(id)}><i className="fa-solid fa-xmark"></i></span>
            </button>

            <div className="cart-item-produto">
                <div className="box-cart-item">
                <p className="name-produto">{nome}</p>
                <p className="value-product">R$ {valor * amount},00 </p>   
                </div>

                <div className="cart-item-decrement-add">
                    <button className="btn-button" onClick={() => decreaseUnit(id)}>-</button>
                    <p>{amount}</p>
                    <button className="btn-button" onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </article>

    )
}

export { CartItem }
