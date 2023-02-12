import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const suggestions = [
        { name: "memes proibidos em 112 paises", image: "assets/img/bad.vibes.memes.svg", reason: "Segue você" },
        { name: "meu deus por favor nãoa guento mais", image: "assets/img/chibirdart.svg", reason: "Segue você" },
        { name: "chega, já eh 4 da manhã", image: "assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
        { name: "ahhhhhhhh", image: "assets/img/adorable_animals.svg", reason: "Segue você" },
        { name: "quero dormir", image: "assets/img/smallcutecats.svg", reason: "Segue você" }
    ]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para acabar com sua porodutividade
                <div>Ver tudo</div>
            </div>

            {suggestions.map(s => <Sugestao key={s.name} name={s.name} image={s.image} reason={s.reason} />)}
        </div>
    )
}