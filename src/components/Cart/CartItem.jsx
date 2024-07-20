import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { catalogIndexedById } from "../../mock/product_mock"

const CartItem = ({id, amount}) => {
    const { addToCart, decreaseUnit, removeFromCart } = useContext(CartContext)
    const {img, nome, avaliacao, valor} = catalogIndexedById[id]
    return (
        <article>
            <img style={{width: '100px'}} src={img}
                alt={`Imagem do produto.`}
            />

            <button>
                <p onClick={() => removeFromCart(id)}>x</p>
            </button>
            <div>
                <p>{nome}</p>
                <p>{avaliacao}</p>
                <p>R$ {valor},00 </p>
            </div>
            <div>
                <button onClick={() => decreaseUnit(id)}>-</button>
                <p>{amount}</p>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </article>

    )
}

export { CartItem }
