import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { ListaDeProdutos } from "../../components/ProductCard/ProductCard"
import "./index.scss"


const Produtos = () => {
    return (
        <section>
            <Header />

            <div className="layout-style-main-footer">
                <div className="container produtos">
                    <div className="cards-produtos">
                        <ListaDeProdutos />
                    </div>
                    <div className="banner"> </div>
                    <div>
                        <ListaDeProdutos />
                    </div>
                    <div className="banner"> </div>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export { Produtos }