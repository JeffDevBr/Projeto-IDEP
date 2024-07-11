import { CardArtigos } from "../CardArtigos/CardArtigos";
import "./index.scss"

const UltimasNoticias = ({ data }) => {
    const artigosFiltrados = data.filter(artigo => artigo.id > data.length - 3 );
   
    return (
        <section className="ultimas-noticias">
            <h1><span className="noticias-title">Últimas noticias</span></h1>

            <div className="home-noticias">
                {
                    artigosFiltrados.map(artigo => (
                        <CardArtigos key={artigo.id} data={artigo} />
                    ))}
            </div>
        </section>
    )
}

export { UltimasNoticias }