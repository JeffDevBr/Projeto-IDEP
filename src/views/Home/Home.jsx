import './index.scss'

import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { CarouselComponent } from '../../components/CarouselComponent/CarouselComponent'
import { ListaDeProdutos } from "../../components/ProductCard/ProductCard"
import { Time } from '../../components/Time/Time'
import { NoticiasHome } from '../../components/NocitiasHome/NocitiasHome'


const Home = ({ data }) => {
    return (
        <section>
            <div className='top'>
                <Header />
            </div>
            <div className='layout-style-main-footer'>
                <div className=''>
                    <div className="home">
                        <section className="container">
                            <h1>Home</h1>
                            <CarouselComponent />
                        </section>


                        <div className="banner-home-time">
                            <div className="container banner-home-time-content">
                                <Time />
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div>
                            <ListaDeProdutos />
                            <br></br> <br></br>
                            <ListaDeProdutos />

                            <div className='noticias'>
                                <NoticiasHome data={data}/>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </section>
    )
}

export { Home }