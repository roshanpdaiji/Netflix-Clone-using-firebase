import React, { useEffect, useState } from 'react';
import './Player.css';
import { useNavigate, useParams } from 'react-router-dom';

function Player() {
  const { id } = useParams();

  //back arrow

  const navigate=useNavigate();



  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDJhZDg3NGNlNzUxOTY1MjMwNTRmYmY4MDQxNDIzMCIsIm5iZiI6MTczMzc3MjY0NC4xMTUsInN1YiI6IjY3NTc0NTY0NmUwYmVkMjY2YjdmYmFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iKhL9WJCwaZLoyZBIAR8YdrPQ36g4k_9BekDu2oaeao'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      {/* Back Arrow Icon */}
      <i 
        className="fa-solid fa-arrow-left back-arrow"
        onClick={() => {navigate(-2)}}
      ></i>

      {/* Video Player */}
      <iframe 
        className="video-frame"
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        frameBorder="0" 
        allowFullScreen 
        title='Trailer'
      ></iframe>

      {/* Player Info */}
      <div className="player-info">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
