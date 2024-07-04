import "./index.scss"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"


const Contato = () => {
    return (
        <>
            <Header />

            <div className="layout-style-main-footer">

                <div className="container">
                    <h1>Contato</h1>
                </div>

                <Footer />
            </div>

        </>

    )
}

export { Contato }