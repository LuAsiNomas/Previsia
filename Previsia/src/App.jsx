import { useState } from 'react'
import previsia from './assets/previsia.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section id="center">
        <div className="hero">
          <img src={previsia} className="base" width="170" height="179" alt="Previsia logo" />
        </div>
        <div>
          <h1>Bienvenido</h1>
          <p>
            Previsia, la mejor plataforma web del clima
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      
    </>
  )
}

export default App
