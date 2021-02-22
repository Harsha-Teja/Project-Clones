import React from "react"
import AnimeCard from "./AnimeCard"

function MainContent(props) {
    return (
        <main>
            <div className="main-head">
                <form className="search-box">
                    <input 
                        type="search"
                        placeholder="search for an anime please....."
                        required
                        value = {props.search}
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
            </div>
            <div className="anime-list">
                {props.animeList.map(anime => (
                    <AnimeCard 
                        anime={anime}
                        key={anime.mal_id}
                    />
                ))}
            </div>
        </main>
    )
}

export default MainContent