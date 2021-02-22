import React from "react"

function AnimeCard(anime) {
    return (
        <article className="anime-card">
            <a 
            href={AnimeCard.url} 
            target="_blank" 
            rel="noreferrer"
            key={anime.mal_id}>
                <figure>
                    <img 
                        src={anime.image_url}
                        alt="Anime Image"/>
                </figure>
                <h3>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard