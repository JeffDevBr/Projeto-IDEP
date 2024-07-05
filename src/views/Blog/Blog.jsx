import './index.scss'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { CardArtigos } from '../../components/CardArtigos/CardArtigos'

const Blog = ({ data }) => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    const artigosReversos = [...data].reverse()

    return (
        <section className='blog-section'>

            <Header />
            <div className='blog'>
                <div className='blog-content container'>

            <h1 className='title'> Blog News</h1>
                    <div className="blog-content-cards">
                        {
                            artigosReversos.map(artigo => (
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