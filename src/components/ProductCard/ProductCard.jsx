import mockProdutos from '../../mock/product_mock'
import './index.scss'


const ProdutoCard = ({ produto }) => {
    return (
        <div className="produto-card">
            <div className='card-top'>
                <img src={produto.img} alt={produto.nome} />
            </div>
            <div className='card-main'>

                <h2>{produto.nome}</h2>
                <div className="avaliacao">
                    {"★".repeat(produto.avaliacao) + "☆".repeat(5 - produto.avaliacao)}
                </div>
                <p>R${produto.valor.toFixed(2)}</p>
                <span>1x de R$ {produto.valor.toFixed(2)} sem juros no cartão de
                credito</span>
            </div>
        </div>
    )
}

const ListaDeProdutos = () => {
    return (
        <div className="lista-produtos">
            {mockProdutos.map(produto => (
                <ProdutoCard key={produto.id} produto={produto} />
            ))}
        </div>
    )
}

export { ListaDeProdutos }
