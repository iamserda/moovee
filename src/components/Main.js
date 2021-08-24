import React,{useState} from "react"
import Presentation from "./Presentation"
import getData from "../AppBrain/GetData"
import updateResults from "../AppBrain/GetResults"

function Main(){
    const [query,setQuery] = useState("")
    const [data, setData] = useState([])
    const [resultsMap, setResultsMap] = useState([])
    
    function handleChange(event){
        setQuery(event.target.value)
    }
    
    
    async function handleSubmit(event){
        event.preventDefault();
        try{
          if(!query){
                throw new Error("query var is null")
            }else{
                const dataReceived = await getData(query);
                await setData(dataReceived);
                // console.log(data.results.length)
                
                if(data.results && data.results.length !== 0){
                    await setResultsMap(updateResults(data.results))
                }else{
                    throw new Error("No Data Received!")
                }
            }
        }catch(err){
            console.error(err)
        }
    }
    
    return(
        <div className="app-main">
            {/* search bar */}
            <div className="search-app">
                <form onSubmit={handleSubmit}>
                    <input 
                        name="search"
                        placeholder="Enter a movie" 
                        value={query}
                        onChange={handleChange}/>
                    <button>Search</button>
                </form>
            </div>
            <Presentation>
                { resultsMap ? resultsMap : "No results found!"}
            </Presentation>
            {/* Presentation is the area where the 
                Movie components are rendered. It's a container. */}
            {/*data && console.log(data.results[0]) */}
        </div>)
}

export default Main