import React from 'react'

export const GifGridItem = ( {title, url} ) => {

    console.log('se monto el componente GifGridItem');
    
    console.log(url);

    return (
        <div className='card'>
            <img src={url} alt={title}></img>
        </div>
    )
}

export default GifGridItem;