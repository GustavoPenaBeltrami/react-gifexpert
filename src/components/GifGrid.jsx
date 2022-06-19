import GifCard from "./GifCard";
import useFetchGifs from "../hooks/useFetchGifs";

const apiKey='KmC1gwuD0juBS89BICCc0XKliIQ0rhLK';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(apiKey,category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                { //Podemos mandar todos los elementos que queramos de un objeto, mediante {...images}
                    images.map( images => ( <GifCard key={images.id} {...images} /> ))
                }
            </div>

        </>
    );
}