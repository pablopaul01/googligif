import React,{ useState } from 'react'
import TipoDeBusqueda from './TipoDeBusqueda'
import 'remixicon/fonts/remixicon.css'

const BuscarCategoria = ({setCategoria}) => {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim().length == 0){
          alert ("La busqueda no puede ser vacia")
        }
        else{

          setCategoria(()=>{
            return [inputValue]})
        }
    }

    const limpiar = () => {
      setCategoria([]);
      setInputValue("");
      document.getElementById("search").value="";
    }
  return (
    <>
        <img src="../src/assets/img/Googligif.png" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div className='barraDeBusqueda'>
            <i className="ri-search-line"></i>
            <input type="text" placeholder='Buscar gif' onChange={(e)=>(setInputValue(e.target.value))} id='search'/>
            {inputValue !="" ? <i className="ri-close-line" onClick={limpiar}></i> : null}
            
          </div>
            
            <div>
              <TipoDeBusqueda setCategoria={setCategoria}/>
            </div>
        </form>
    </>
  )
}

export default BuscarCategoria