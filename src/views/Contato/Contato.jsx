import "./index.scss"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"


const Contato = () => {
    return (
        <>
            <Header />

            <div className="layout-style-main-footer">

                <div className="container contato">
                    <div>
                        <h1>Atendimento</h1>

                        <h3>Televendas</h3>
                        <p><span>Segunda</span> à <span>Sexta</span> das <span>8h00</span> às <span>19h00</span> e aos <span>Sábados</span> das <span>8h00</span> às <span>12h00</span>.</p>

                        <h3>tendimento SAC</h3>
                        <p><span>Segunda</span> à <span>Sexta</span> das <span>8h00</span> às <span>18h00</span> e aos <span>Sábados</span> das <span>8h00</span> às <span>12h00</span>.</p>
                    </div>

                    <div className="box-contato-fone">
                        <div>
                            <h1>Contato através do telefone</h1>
                            <p>Para entrar em contato com nosso departamento de vendas, o cliente pode usar os telefones abaixo com DDD locais para economizar nas ligações interurbanas. Basta selecionar o estado em que se encontra.</p>
                        </div>
                        <div className="contato-fone">
                            <div>
                                <p>Rondônia</p>
                                (69) 9999-9999
                            </div>

                            <div>
                                <p>São Paulo-SP</p>
                                (11) 9999-9999
                            </div>
                            <div>
                                <p>Fortaleza-CE</p>
                                (85) 9999-9999
                            </div>
                            <div>
                                <p>loren-ipsu</p>
                                (xx) 9999-9999
                            </div>
                            <div>
                                <p>loren-ipsu</p>
                                (xx) 9999-9999
                            </div>
                            <div>
                                <p>loren-ipsu</p>
                                (xx) 9999-9999
                            </div>
                            <div>
                                <p>loren-ipsu</p>
                                (xx) 9999-9999
                            </div>
                            <div>
                                <p>loren-ipsu</p>
                                (xx) 9999-9999
                            </div>
                            <div>
                                <p>loren-ipsu</p>
                                (xx) 9999-9999
                            </div>
                            <div>
                                <p>loren-ipsu</p>
                                (xx) 9999-9999
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>

    )
}

export { Contato }