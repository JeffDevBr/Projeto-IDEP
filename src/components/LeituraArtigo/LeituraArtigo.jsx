import "./index.scss"

const LeituraArtigo = ({data}) => {
       
    return(
        <section className="leitura-artigo">
        
            <div className="leia-content">
                {/* <img src={`../../../public/${data.imgPath}`} alt="Imagens Artigo" /> */}
                <img src={data.imgPath} alt="Imagens Artigo" />
                <h1>{data.title}</h1>
                <span>{data.publicationDate} por {data.author}</span>
                <p className="excerpt">{data.excerpt}</p>
                <p>{data.content}</p>
            </div>
            
        </section>
    )
} 

export {LeituraArtigo}