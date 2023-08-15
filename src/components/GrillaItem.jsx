import React from 'react'

const GrillaItem = ({gif}) => {
  return (
    <div className='card'>
        <div className="contenedorimg">
          <img src={gif.url} alt={gif.title} />
        </div>
        <div className="contenedorp">
          <p>{gif.title}</p>
        </div>
    </div>
  )
}

export default GrillaItem