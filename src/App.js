// import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './MovieCard'
import { demoData } from './api'

const log = console.log
const api_key =  'a4a72ba3'
const API_URL = `https://www.omdbapi.com?apikey=${api_key}`


const App = () => {
    const [movies, setMovies] = useState(demoData)
    const [searchTerm, setSearchTerm] = useState('')
    
    const searchMovies = async (title) => {
        const res = await fetch(`${API_URL}&s=${title}`)
        const data = await res.json()
        // setMovies(data.Search)
    } 
    
    useEffect(() => {
        // searchMovies('Batman')
    }, [])

    return (
        <div className='app'>
            <h1>Movie City</h1>
            <div className='search'>
                <input placeholder="Search a movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <img src={searchIcon} alt='Search Icon' onClick={() => searchMovies(searchTerm)}/>
            </div>

            {movies.length>0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        ))}
                    </div>
                    )
                : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
            )}
            
        </div>
    )
};

export default App;