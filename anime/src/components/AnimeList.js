import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from 'reactstrap';

//components
import AnimeCard from './AnimeCard'

const AnimeList = () => {

    const [ anime, setAnime ] = useState([])

    useEffect(()=>{
        axios.get('https://kitsu.io/api/edge/anime/')
        .then(res => {
            console.log(res.data.data)
            setAnime(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    if(anime.length ===0){
        return(
            <Spinner color="primary" />
        );
    }


    return(
        <section>
            <h2>Anime list</h2>
            {anime.map(show => (
                <AnimeCard key={show.id} id={show.id} title={show.attributes.titles.en_jp} description={show.attributes.synopsis} logo={show.attributes.posterImage.small} />
            ))}
        </section>
    )
}

export default AnimeList;