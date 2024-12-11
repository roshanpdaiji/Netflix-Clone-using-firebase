import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';  // Ensure the correct path
import { Link } from 'react-router-dom';


// Correct function declaration with props
const TitleCards = ({ title, category }) => {


  const [apiData,setApiData] = useState([]);



  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDJhZDg3NGNlNzUxOTY1MjMwNTRmYmY4MDQxNDIzMCIsIm5iZiI6MTczMzc3MjY0NC4xMTUsInN1YiI6IjY3NTc0NTY0NmUwYmVkMjY2YjdmYmFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iKhL9WJCwaZLoyZBIAR8YdrPQ36g4k_9BekDu2oaeao'
    }
  };
  
useEffect(()=>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

},[])




  return (
    <div className="titlecards">
      <h2>{title?title:"Popular On Netflix"}</h2> {/* Using dynamic title */}
      
      <div className="card-list">
        {
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img 
                src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} 
                alt={card.name} 
              />
              <p>{card.original_title}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default TitleCards;
