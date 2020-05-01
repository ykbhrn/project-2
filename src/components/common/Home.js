import React from 'react'

const Home = () => (

  <section className="hero is-fullheight-with-navbar">
    <div className="menu-img">     
      <div className="gps_ring">    
        <img src="news.png" width="130px" height="130px"/>
      </div>
    </div>
    <div className="menu-img">
      <div className="gps_ring-two">
        <img src="weather.png" width="130px" height="155px" /></div>
    </div>
    
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