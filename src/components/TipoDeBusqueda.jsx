import React, { useState} from 'react'

const TipoDeBusqueda = ({setCategoria}) => {
    const [radioValue, setRadioValue] = useState(null);

    const handleRadio = (e) => {
        setRadioValue(e.target.value);
        setCategoria([]);
        e.target.checked = true;
    }
  return (
    <div className='contenedorRadios'>
        <div>
            <label htmlFor="">Buscar Gif</label>
            <input type="radio" name="radios" id="radioGif" value="gif" onChange={handleRadio} />
        </div>
        <div>
            <label htmlFor="">Buscar Sticker</label>
            <input type="radio" name="radios" id="radioSticker" value="sticker" onChange={handleRadio} />
        </div>
    </div>
  )
}

export default TipoDeBusqueda