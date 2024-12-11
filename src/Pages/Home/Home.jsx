import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import TitleCards from '../../Components/TitleCards/TitleCards';
import Footer from '../../Components/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="hero">
          <img
            className="banner-img"
            src="https://image.tmdb.org/t/p/original/zAIippNnm6o0gYEtjapbjQSxP8G.jpg"
            alt="Money Heist"
          />
          <div className="hero-caption">
            <p>
              Money Heist (La Casa de Papel) is a Spanish heist crime drama that tells the story of a criminal mastermind, "The Professor," and his team of eight robbers as they carry out ambitious and meticulously planned heists on the Royal Mint of Spain and the Bank of Spain.
            </p>
            <div className="hero-btns">
              <button>
                <i className="fa-solid fa-play m-2" style={{ color: '#080808' }}></i>
                Play
              </button>
              <button>
                <i className="fa-solid fa-circle-info m-2" style={{ color: '#161717' }}></i>
                Info
              </button>
            </div>
          </div>
        </div>

        {/* TitleCards component */}
        <TitleCards />

        {/* Placeholder for more content */}
        <div className="more-cards">
          <TitleCards title="Blockbuster Movies" category={'top_rated'} />
          <TitleCards title="Only On Netflix" category={'popular'} />
          <TitleCards title="Upcoming" category={'upcoming'} />
          <TitleCards title="Top Pics For You" category={'now_playing?'}/>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
