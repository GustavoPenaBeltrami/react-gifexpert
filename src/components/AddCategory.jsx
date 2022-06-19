import {useState} from 'react';

export const onAddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("");

    //Actualiza el valor del input por el que escribamos
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    //Al enviar el form con el "Enter", selecciona lo escrito en el input, recorta los espacios de sobra y lo envía al
    //componente padre mediante la property (que es una funcion) "onNewCategory"
    const onSubmit = (e) => {
        e.preventDefault();
        const newCategory = inputValue.trim();

        if (newCategory.length <=1) return;
        onNewCategory(newCategory);
        setInputValue("");
    }

    
    return (
        <form
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder="Buscar gifs"
                value= {inputValue}
                onChange={onInputChange}
            
            />
        </form>
    )
}

export default onAddCategory;