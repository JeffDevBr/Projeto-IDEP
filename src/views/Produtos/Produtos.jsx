import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./index.scss"

const Produtos = () => {
    return (
        <section>
            <Header />

            <div className="layout-style-main-footer">
                <div className="container">
                    <h1> Produtos </h1>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export { Produtos }