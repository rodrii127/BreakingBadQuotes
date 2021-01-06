export const getGif = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=20&api_key=W0hha8Na7gGudVP3nTcJULDLoh1Ehj7x`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const random = 15;

    console.log('se monto el componente GifGrid');
    
    const gif = {
        title: data[Math.floor(Math.random() * random)].title,
        id: data[Math.floor(Math.random() * random)].id,
        url: data[Math.floor(Math.random() * random)].images.downsized_medium.url
    }
    return gif;
};