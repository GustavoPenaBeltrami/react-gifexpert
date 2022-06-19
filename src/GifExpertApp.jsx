import {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid,  } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        //Convierte el string en lowercase menos la primera letra
        const lowerNewCategory = newCategory.charAt(0).toUpperCase() + newCategory.slice(1).toLowerCase();

        //Comprueba si hay repetidos, sino lo agrega
        if (categories.includes(lowerNewCategory)) return;
        setCategories([lowerNewCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            { categories.map(category => (
                    <GifGrid key={category} category={category}/>
            ))}
        </>
    );
}

export default GifExpertApp