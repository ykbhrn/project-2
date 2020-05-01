import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => (

  <section className="hero is-fullheight-with-navbar">
    <Link to="/news">   
      <div className="gps_ring">    
        <img src="news.png" width="130px" height="130px" className="menu-img"/>
      </div>
    </Link>
    <Link to="/weather">
      <div className="gps_ring-two">
        <img src="weather.png" width="155px" height="175px" className="menu-img"/>
      </div>
    </Link>
    <div className="hero-body">
      <div className="container">
        <p className="title is-1 has-text-centered has-text-black">
          <span role="img" aria-label="logo" className="logo-emoji"></span>
        </p>
      </div>
    </div>
  </section>
)

export default Home