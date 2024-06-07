import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: 'Vinicius',
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }

  const item2 = {
    name: "Edson",
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const item3 = {
    name: 'Kina',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
  }

  //Listas (Arrays)
  const itens = [item1, item2, item3]

  return (
    <>
      <div className='cards'>
        {/* para cada um dos itens da lista, exibir um Card*/}
        {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
      </div>
    </>
    
  )
}

export default App
