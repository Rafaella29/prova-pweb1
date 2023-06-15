import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [personagens, setPersonagens] = useState([])
  useEffect(() => {
    const listaDePersonagens = async () => {
      try {
        const resposta = await axios.get('https://api.disneyapi.dev/character')
        setPersonagens(resposta.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    listaDePersonagens()
  }, [])
  return (
    <>
      <h1>API DISNEY</h1>
      {personagens.map((objeto) => (
        <div>
          <li key={objeto.name}>
            <h3>{objeto.name}</h3>
            <img src={objeto.imageUrl} alt="ola Disney " />
          </li>
        </div>
      ))}
    </>
  )
}
export default App
