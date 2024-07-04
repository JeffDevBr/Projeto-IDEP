import './index.scss'

import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"

const Home = () => {
    return (
        <section>
            <div className='top'>
                <Header />
            </div>
            <div className='layout-style-main-footer'>
                <div className='container'>
                    <h1>Home</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta eveniet, nisi assumenda incidunt odio quibusdam porro, harum iure, eos adipisci fuga quisquam. Doloribus corporis laborum vitae ab perspiciatis quisquam dignissimos?</p>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export { Home }