import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

export const useFetchGifs = (apiKey,category) => {
    // Lo necesito para guardar las propiedades que me interesan del api en un mismo array
    const [images, setImages] = useState([]);
    // Lo necesito para guardar el estado de la carga de los gifs
    const [isLoading, setIsLoading] = useState(true);

    //Hago la peticion de la api de forma asincronay al finalizar actualiza el estadode isLoading
    const getImages = async() => {
        const newImage = await getGifs(apiKey,category);
        setImages(newImage);
        setIsLoading(false);
    }

    //Ejecuto la funcion getImages cuando el componente se monta
    useEffect( () => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}

export default useFetchGifs;