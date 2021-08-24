import React, { useState} from "react";
import Presentation from "./Presentation";
import getData from "../AppBrain/GetData";
import updateResults from "../AppBrain/GetResults";

function Main() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState();
  const [resultsMap, setResultsMap] = useState([]);

  const handleChange = event => { setQuery(event.target.value); }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!query) {
        throw new Error("query var is null");
      } else {
        const data = await getData(query);

        if (data.results && data.results.length !== 0) {
          setIsLoading(false);
          setResultsMap(updateResults(data.results));
        }else{
          throw new Error("No results found!")
        }
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err);
      // return an empty if no results were found! or if there was an error.
      setResultsMap(updateResults([]));
    }
  }

  return (
    <div className="app-main">
      {/* search bar */}
      <div className="search-app">
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            placeholder="Enter a movie"
            value={query}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
      { isLoading === undefined ? <Presentation> </Presentation> : <Presentation>{ isLoading === true ? [<h2>Loading...</h2>]: resultsMap.length !== 0 ? resultsMap : []}</Presentation>
      }
      {/* Presentation is the area where the 
                Movie components are rendered. It's a container. */}

      {/*data && console.log(data.results[0]) */}
      
    </div>
  );
}

export default Main;
