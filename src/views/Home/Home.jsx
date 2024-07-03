import './index.scss'

import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"

const Home = () => {
    return (
        <section>
            <div className='top'>
                <Header />
            </div>
            <div className='test'>
                <div>
                    <h1>Home</h1>
                    <p>Li vitae autem iste rem consectetur velit?</p>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export { Home }