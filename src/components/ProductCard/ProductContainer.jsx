import mockProdutos from '../../mock/product_mock'
import { ProdutoCard } from './ProductCard'
import './index.scss'

const ProductContainer = () => {
    return (
        <section className='product-container'>
            {mockProdutos.map(produto => (
                <ProdutoCard key={`product_${produto.id}_key`} {...produto} />
            ))}
        </section>
    )
}

export { ProductContainer }
