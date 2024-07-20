import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./index.scss"


const Produtos = () => {
    return (
        <section>
            <Header />

            <div className="layout-style-main-footer">
                <div className="container produtos">
                    <div className="cards-produtos">
                       
                    </div>
                    <div className="banner"> </div>
                    <div>
                       
                    </div>
                    <div className="banner"> </div>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export { Produtos }