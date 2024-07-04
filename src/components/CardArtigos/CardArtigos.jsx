import './index.scss'
import { Link } from 'react-router-dom'

const CardArtigos = ({ data }) => {
    return (
        <Link to={`/Artigo/${data.id}`}>
            
            <div className="card-content">
                <img src={data.imgPath} alt="Imagens Artigo" />
                <span>{data.publicationDate} por {data.author}</span>
                <h1>{data.title}</h1>
                <p>{data.excerpt}</p>
            </div>
        </Link>
    )
}


export { CardArtigos }