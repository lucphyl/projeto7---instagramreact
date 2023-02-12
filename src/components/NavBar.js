export default function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <a className="rickzinho" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={"_blank"}>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" />
                </div>

                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" />
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div className="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}