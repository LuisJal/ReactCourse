export const getGifs= async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KaFF4hOuxotxkr52fv2QfiVHgvHTbkG4&limit=10&q=${category}'`
    const resp = await fetch(url);
    const {data = []} = await resp.json();
    const gifs = data.map(img =>({
        id: img.id,
        tittle: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(gifs)
    return gifs;
}