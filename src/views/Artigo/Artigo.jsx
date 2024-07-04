import { useParams } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { LeituraArtigo } from "../../components/LeituraArtigo/LeituraArtigo"
import "./index.scss"

const Artigo = ({data}) => {
    const {artigoId} = useParams()
    const selectArticle = data.find(article => article.id == artigoId)

    return (
       <>
        <Header/>

        <div className="layout-style-main-footer">
        <div className="container">
            
            <LeituraArtigo data={selectArticle} />
        </div>

        <Footer/>
        </div>

       </>
    )
}

export {Artigo}