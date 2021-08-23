/* the actual fetching func */
async function fetchData(someURL){
    if(someURL === "") throw new Error("URL is null!");
    try{
        const fetchResponse = await fetch(someURL);
        if(fetchResponse.ok){
            const responseData = await fetchResponse.json();
            return responseData;
        }else{
            const {status, statusText:text} = await fetchResponse;
            throw new Error(`Fetch request failed! Code: ${status}, Text: ${text}`)
        }
    }catch(error){
        console.error(`Fetching Error: ${error}`);
    }
}

/* for now, this will only fetch Movies. */
function getData(searchTerm){
    
    /* building pieces for fetchURL */
    const baseURL = "https://api.themoviedb.org/3/search/movie?";
    const apiKey ="api_key=ac90d92bd8c72130102ac6918285044d";
    const query = searchTerm !== "" ? `query=${searchTerm}` : `query=${null}`
    
    /*composing fetchURL*/
    const fetchURL = `${baseURL}${apiKey}&${query}`
    // console.log(fetchURL)
    
    /****************************************************************************/
    /*  FUTURE MODS:
        func could grow to allow explicit selections: movie, tvshows, actor, company
        as per the movie db api. I could also use the "multi" endpoint
        we can either create new function
        or modify this function to make it selective via paramaters.
        like 1: movie, 2: tvshows, 3: actors.
    
    *   Building Fetch Request, this func could be decoupled even further
    */
    /****************************************************************************/
    if(searchTerm !== ""){
        const data = fetchData(fetchURL)
        // console.log(data)
        return data;
    }
    
}

export default getData;