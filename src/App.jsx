import React ,{ useState } from 'react'
import BuscarCategoria from './components/BuscarCategoria'
import GrillaGifs from './components/GrillaGifs'
import { getGifs } from './helpers/getGifs'

function App() {
  // const [count, setCount] = useState(0)
  const [categorie, setCategoria] = useState([])

  return (
    <>
     
     <div className='contenedor'>
      <BuscarCategoria setCategoria={setCategoria}/>
      {categorie.map((categoria)=>{
        
        return <GrillaGifs categoria={categoria} key={categoria+1}/>
        })}
     </div>
    </>
  )
}

export default App
