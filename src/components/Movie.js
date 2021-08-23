import React from "react"
// import "./Movie.css"

const Movie = (props)=>{
    
    const defaultPoster = "https://images.unsplash.com/photo-1628363948262-8baa532858f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80";
    const defaultBackdrop = "https://images.unsplash.com/photo-1605265406841-9d9967ea2989?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
    
    const {id, title, overview, poster_path, backdrop_path, vote_average, vote_count} = props;
    const posterSize = "/w500";
    const backdropSize="/w1280"
    const baseURL = "https://image.tmdb.org/t/p"
    const posterURL = poster_path ? 
                        `${baseURL}${posterSize}${poster_path}` : defaultPoster;
    const backdropURL = backdrop_path ? 
                        `${baseURL}${backdropSize}${backdrop_path}` : defaultBackdrop;
    
    const styleMovieComponent = {
        backgroundImage: `url(${backdropURL})`,
        backgroundOrigin: "border-box",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white"
    }
    const styleMovieInfoContainer = {
        backgroundColor: "#00000099"
    }
    return(
        <div style={styleMovieComponent} className="Movie-component" id={`movieid${id}`} >
            <div className="Movie-image-container">
                <img className="Movie-image" src={posterURL} alt={"proto-alt"} />
            </div>
            <div style={styleMovieInfoContainer} className="Movie-info-container">
                <h3 className="Movie-title">{title}</h3>
                <p className="Movie-overview">{overview}</p>
                <p style={{fontWeight: "bold"}} className="Movie-overview">Rated: {vote_average}({vote_count})</p>
                <p style={{fontWeight: "bold"}} className="Movie-overview">
                Released Date: {props.release_date}</p>
            </div>
        </div>
    )
}

export default Movie