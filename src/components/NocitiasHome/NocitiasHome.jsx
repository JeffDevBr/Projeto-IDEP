import { CardArtigos } from "../CardArtigos/CardArtigos";
import "./index.scss"

const NoticiasHome = ({ data }) => {
    const getRandomArticles = (articles, count) => {
        const shuffled = [...articles].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const artigosFiltrados = getRandomArticles(data, 3);
   

    return (
        <section className="noticias-home">
            <h1><span className="noticias-title">Últimas notícias</span></h1>
            <div className="home-noticias">
                {
                    artigosFiltrados.map(artigo => (
                        <CardArtigos key={artigo.id} data={artigo} className="card-artigos" />
                    ))
                }
            </div>
        </section>
    );
};

export { NoticiasHome };
