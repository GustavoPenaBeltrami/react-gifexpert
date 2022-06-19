const getGifs = async(key,q) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}&limit=10`;
    const resp = await fetch(url);
    //Importante poner el https en el url
    const { data = [] } = await resp.json();
    //Busco uniacemente los datos que me interesan de la API
    const gifs = data.map( gif => ({ 
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
}

export default getGifs;