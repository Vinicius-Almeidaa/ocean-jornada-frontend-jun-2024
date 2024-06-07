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

  return (
    <>
      <div className='cards'>
        <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} />
      </div>
    </>
    
  )
}

export default App
