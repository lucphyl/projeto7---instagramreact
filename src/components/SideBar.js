import { useState } from "react"
import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar() {
    const [name, setName] = useState("Catana")
    const [image, setImage] = useState("assets/img/catanacomics.svg")
    
    return (
        <div className="sidebar">
            <Usuario
                name={name}
                setName={setName}
                image={image}
                setImage={setImage}
                userName={"catanacomics"}
            />
            <Sugestoes />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}