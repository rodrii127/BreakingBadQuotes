import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    const isMounted = useRef();

    console.log('se monto el custom hook useFetch');

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        if (isMounted.current) {
            setstate({
                data: null,
                loading: true,
                error: null
            });
        }
        fetch(url)
        .then(response => response.json())
        .then(data => setstate({
            loading: false,
            error: null,
            data: {data}
        }));
    }, [url])

    return state;

}