import { useEffect, useState } from "react"
import { getGif } from "../helpers/GetGif";


export const useFetchGifs = ( category = 'Breaking Bad' ) =>{
    
    console.log('se monto el componente useFetchGif');

    const [state, setstate] = useState({
        data: null,
        loading: true
    });

    useEffect(()=>{
        getGif( category ).then(imgs =>{
            setstate({
                data: imgs,
                loading: false
            });
        });
    }, [category]);

    return state; //{data: [], loading: true}
}