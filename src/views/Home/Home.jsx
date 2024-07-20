import './index.scss'

import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import { CarouselComponent } from '../../components/CarouselComponent/CarouselComponent'
import { Time } from '../../components/Time/Time'
import { NoticiasHome } from '../../components/NocitiasHome/NocitiasHome'
import { ProductContainer } from '../../components/ProductCard/ProductContainer'
import { CartOverlay } from '../../components/Cart/CartOverlay'


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
                            <ProductContainer />
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
                            <br></br> <br></br>

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