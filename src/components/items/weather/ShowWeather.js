import React from 'react'
import { getAllWeather } from '../../../lib/api'

class ShowWeather extends React.Component {
  state = {
    city: ''
  }
  async componentDidMount() {
    try {
      const res = await getAllWeather(this.state.city)
      this.setState({ news: res.data.articles })
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = async (event) => {
    console.log(event.target.value)
    try {
      await this.setState({ country: event.target.value })
      this.componentDidMount()
    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    {/* <h1 className="title-of-the-card">
                      {title}</h1> */}
                    <div className="image-tag">
                      {/* <img src={urlToImage} alt={title} /> */}
                    </div>
                    <p className="author-name">
                      {/* {author} - {publishedAt.split('T').join(' ').split('Z')} */}
                    </p>
                    <div className="description">
                      {/* {description} */}
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </>
    )
  }
}
export default ShowWeather