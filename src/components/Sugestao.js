export default function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} />
                <div className="texto">
                    <div className="nome">{props.name}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}