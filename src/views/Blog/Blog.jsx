import './index.scss'
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { CardArtigos } from '../../components/CardArtigos/CardArtigos'
import { key } from 'localforage'

const Blog = ({ data }) => {

    return (
        <section className='blog-section'>

            <Header />
            <div className='blog'>
                <div className='blog-content container'>

            <h1 className='title'> Blog News</h1>
                    <div className="blog-content-cards">
                        {
                            data.map(artigo => (
                                <CardArtigos key={artigo.id} data={artigo} />
                            ))}
                    </div>


                </div>

                <Footer />
            </div>


        </section>
    )
}

export { Blog }