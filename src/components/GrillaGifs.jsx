import React from 'react'
import GrillaItem from './GrillaItem'
import useFetchGif from '../hook/useFetchGif'


const GrillaGifs = ({categoria}) => {
    const {data} = useFetchGif(categoria);
  return (
     <>
      
      <div className='container'>
        {
            data.map((gif)=>(
              
                <GrillaItem gif={gif} key={gif.id}/>
        ))}
      </div>
     </>
  )
}

export default GrillaGifs