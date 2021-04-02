import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true); // Se está utilizando para saber si el componente está montado
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false; // Limpia la referencia al desmontarse el componente
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if (isMounted.current) { // Evalua si el componente está montado
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('setState no se ejecutó');
                }
            })
    }, [ url ]);

    return state;
}
