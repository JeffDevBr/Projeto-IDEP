import "./index.scss"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

const Sobre = () => {
    return(
        <>
        <Header/>

        <div className="layout-style-main-footer">
        <div className="container">
        <h1>Sobre-nos</h1>
        </div>

        <Footer/>
        </div>
        </>
    )
}

export {Sobre}