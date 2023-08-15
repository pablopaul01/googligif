import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGif = (categoria) => {
    const [state, setState] = useState({
        data:[]
    })

    useEffect(() => {
      getGifs(categoria).then((gif)=>{
        setState({
            data: gif
        })
      })

    }, [categoria])
  return state
}

export default useFetchGif