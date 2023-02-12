export default function Usuario(props) {

    function changeName() {
        const nomeDigitado = prompt("muda o nome ai truta")
        props.setName(nomeDigitado)
    }

    function changeImage() {
        const imagemDigitada = prompt("link pra imagem")
        props.setImage(imagemDigitada)
    }

    return (
        <div className="usuario">
            <img src={props.image} onClick={changeImage}/>
            <div className="texto">
                <strong>{props.userName}</strong>
                <span>
                    {props.name}
                    <ion-icon name="pencil" onClick={changeName}></ion-icon>
                </span>
            </div>
        </div>
    )
}