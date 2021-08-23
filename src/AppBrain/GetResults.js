import React from "react"
import Movie from "../components/Movie"

function updateResults(data){
    const dataMapped = data.map(
        item => {
            return <Movie key={item.id} {...item} /> 
        })
    return dataMapped;
}

export default updateResults;