import { useParams } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { LeituraArtigo } from "../../components/LeituraArtigo/LeituraArtigo"
import "./index.scss"
import { UltimasNoticias } from "../../components/UltimasNoticias/UltimasNoticias"

const Artigo = ({ data }) => {
    const { artigoId } = useParams()
    const selectArticle = data.find(article => article.id == artigoId)

    return (
        <>
            <Header />

            <div className="layout-style-main-footer">
                <div className="container">

                    <div className="artigo">
                        <div>
                            <LeituraArtigo data={selectArticle} />
                        </div>
                        <div>
                            <UltimasNoticias data={data} />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

        </>
    )
}

export { Artigo }