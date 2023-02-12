import Story from "./Story"

export default function Stories() {
  const stories = [
    { name: "9gag", image: "assets/img/9gag.svg" },
    { name: "gatineos", image: "assets/img/meowed.svg" },
    { name: "catioros", image: "assets/img/barked.svg" },
    { name: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" },
    { name: "wawawicomics", image: "assets/img/wawawicomics.svg" },
    { name: "respondeai", image: "assets/img/respondeai.svg" },
    { name: "filomoderna", image: "assets/img/filomoderna.svg" },
    { name: "memeriagourmet", image: "assets/img/memeriagourmet.svg" }
  ]

  return (
    <div className="stories">
      {stories.map((s) => <Story image={s.image} name={s.name} key={s.name}/>)}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}