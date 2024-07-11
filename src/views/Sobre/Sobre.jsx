import "./index.scss"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

const Sobre = () => {
    return (
        <>
            <Header />

            <div className="layout-style-main-footer">
                <div className="container">
                    <div className="sobre-nos">

                        <div className="sobre-nos-header">
                            <div className="box-log">
                                <img src="./log2.png" alt="" />
                                <div className="box"></div>
                            </div>
                            <h1>O IDEP <br></br>E SUA HISTÓRIA</h1>

                        </div>


                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut culpa provident enim nam explicabo mollitia, veritatis maxime quaerat incidunt fuga nesciunt eius aut sapiente dolore eveniet magnam atque. Assumenda!</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut culpa provident enim nam explicabo mollitia, veritatis maxime quaerat incidunt fuga nesciunt eius aut sapiente dolore eveniet magnam atque. Assumenda!</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut culpa provident enim nam explicabo mollitia, veritatis maxime quaerat incidunt fuga nesciunt eius aut sapiente dolore eveniet magnam atque. Assumenda!</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ut culpa provident enim nam explicabo mollitia, veritatis maxime quaerat incidunt fuga nesciunt eius aut sapiente dolore eveniet magnam atque. Assumenda!</p>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        </>
    )
}

export { Sobre }