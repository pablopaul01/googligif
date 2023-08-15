import axios from "axios";

const apiKey = "nYSLr0PrD8QbkctYbyXiykrBvyucruoi";

export const getGifs = async (categoria)=>{
    let url=``;
    if (radioGif.checked) {
        url=`https://api.giphy.com/v1/gifs/search?q=${categoria}&api_key=${apiKey}&limit=10`;
      }
      else{
        if(radioSticker.checked){
            url=`https://api.giphy.com/v1/stickers/search?q=${categoria}&api_key=${apiKey}&limit=10`;
        }
        
      }
    

    const respuesta = await axios.get(url);
    const {data} = respuesta.data;
    const datosGifs = data.map((gif)=>{
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })
    return datosGifs;
}