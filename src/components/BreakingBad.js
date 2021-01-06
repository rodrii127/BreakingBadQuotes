import React, { useEffect } from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '../index.css';
import GifGridItem from './GifGridItem';

export const BreakingBad = () => {

    console.log('se monto el componente BreakingBad');

    const { state:valor, increment, decrement, reset } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${valor}`);

    const { author, quote } = !!data && data.data[0];

    const {data: images, loading: loadingGif} = useFetchGifs(author);

    return (
        <>
            {
                loadingGif ?
                    (<div className="alert alert-info text-center" style={{margin: '3em'}}>
                        Loading...
                    </div>)
                    :
                    (<><div className="divFrases">
                        <blockquote className="blockquote">
                            <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    </div>
                    <GifGridItem {...images}/>

                    <div className='buttons'>
                        <button className="btn btn-primary" style={{marginRight: '15px'}} onClick= {() => increment(1)}>Siguiente frase</button>
                        {
                            valor > 1 && (<button className="btn btn-primary" onClick= {() => decrement(1)}>Frase anterior</button>)
                        }
                         <button className="btn btn-primary" style={{marginLeft: '15px'}} onClick= {() => reset()}>Volver a empezar</button>
                    </div>
                    </>
                    )
            }
        </>
    )
}
