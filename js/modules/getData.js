/**
 * fetch funtionen som tar användarens sök ord och antal 
 * bilder som ska visa och begär data från Flickr API
 * -------------------------------------------------------------------------------------------
 */

export let getData = async (searchInput, images) => {
    const APIURL = "https://api.flickr.com/services/rest/";
    const APIKEY = "19d3e6e0acfe9c438f368e2c2bab1c5d";
    const METHOD = "flickr.photos.search";
    const FORMAT = "json&nojsoncallback=1";
    const RELEVANCE = "&sort=relevance";
    let url = `${APIURL}?api_key=${APIKEY}&method=${METHOD}&format=${FORMAT}&text=${searchInput()}&per_page=${images()}${RELEVANCE}`;
    console.log(url)
    let response = await fetch(url, {
    method: "GET"
    });
    let data = await response.json();
    return await data.photos.photo;
};