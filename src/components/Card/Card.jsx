export default function Card (props) {
    console.log(props.item)
    const item = props.item

    return (
    <div className="card">
    <h2>{item.name}</h2>

  <div className="tags">
    <div>Status: Vivo</div>
    <div>Espécie: Humana: Vivo</div>
    <div>Origem: Terra</div>
  </div>

    <img src={item.image} />
  </div>
  )
}