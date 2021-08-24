import React from "react"
import Movie from "../components/Movie"

function updateResults(data){
    
    if(data.length){
        const dataMapped = data.map(
            item => {
                return <Movie key={item.id} {...item} /> 
            })
        return dataMapped;
    }else{
        // what happens if no results were found?
        return []
    }
}

export default updateResults;