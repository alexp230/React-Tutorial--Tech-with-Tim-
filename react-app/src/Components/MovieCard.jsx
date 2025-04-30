
function MovieCard({movie})
{
    function onFavoriteClick()
    {
        alert("clicked!")
    }

    return(
        <div className="movie-card">

            <img src={movie.url} alt={movie.title}/>

            <div className="movie-poster">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    🤍
                </button>
            </div>

            <div className="move-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>

        //❤️
        //🤍


    );
}

export default MovieCard