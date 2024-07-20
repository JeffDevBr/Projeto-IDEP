import { CarouselComponent } from "../../components/CarouselComponent/CarouselComponent"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { ProductContainer } from "../../components/ProductCard/ProductContainer"
import "./index.scss"


const Produtos = () => {
    return (
        <section>
            <Header />

            <div className="layout-style-main-footer">
                <div className="container produtos">

                    <div className="space">
                    <img src="baner3.png" alt="" />
                    </div>

                  
                        <div className="space">
                            <ProductContainer />
                        </div>

                        <div className="space">
                            <CarouselComponent />
                        </div>

                        <div className="space">

                        <ProductContainer />
                        </div>

                  
                    <div className="space">
                        <img src="baner2.png" alt="" />
                    </div>
                </div>

                <Footer />
            </div>
        </section>
    )
}

export { Produtos }