import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({ target }) => { //Maneja todos los inputs de forma parametrizada
        setValues({
            ...values,
            [ target.name ]: target.value //e.target.name y e.target.value
        });
    }

    return [ values, handleInputChange, reset ];
}
