import React from 'react'
import {  useHistory } from "react-router-dom";

//components
import AnimeInfo from './AnimeInfo'

const AnimeCard = (props) => {

    
    return(
        <div className='AnimeCard' >
            <img src={props.logo} alt={props.title}/>
            <div className = "AnimeText">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div>
                    <AnimeInfo id={props.id} title={props.title} description={props.description} />
                </div>
            </div>
        </div>
    )
}

export default AnimeCard