import { CardArtigos } from "../CardArtigos/CardArtigos";
import "./index.scss"

const UltimasNoticias = ({ data }) => {
    const artigosFiltrados = data.filter(artigo => artigo.id > data.length - 3 );
   
    return (
        <section className="ultimas-noticias">
            <h1>Últimas noticias</h1>

            <div>
                {
                    artigosFiltrados.map(artigo => (
                        <CardArtigos key={artigo.id} data={artigo} />
                    ))}
            </div>
        </section>
    )
}

export { UltimasNoticias }