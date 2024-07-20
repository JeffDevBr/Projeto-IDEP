import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import './index.scss'

const ProdutoCard = ({id, img, nome, avaliacao, valor }) => {
    const {addToCart} = useContext(CartContext)
    return (
        <div className="produto-card">
            <div className='card-top'>
                <img src={img} alt={nome} />
            </div>
            <div className='card-main'>

                <h2>{nome}</h2>
                <div className="avaliacao">
                    {"★".repeat(avaliacao) + "☆".repeat(5 - avaliacao)}
                </div>
                <p>R${valor.toFixed(2)}</p>
                <span>1x de R$ {valor.toFixed(2)} sem juros no cartão de
                credito</span>
               
            </div>
            <button onClick={() => addToCart(id)} className='btn-primary-fill'>Comprar</button>
        </div>
    )
}

export {ProdutoCard}
