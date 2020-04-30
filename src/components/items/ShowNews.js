import React from 'react'
import { getAllNews } from '../../lib/api'

class ShowNews extends React.Component {

  state={
    news: []
  }

  async componentDidMount() {
    try {
      const res = await getAllNews()
      this.setState({ news: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.news.articles) return null
    return (
    
      <section className="container is-fluid">
        {Object.entries(this.state.news.articles).map(([index, item])  => {
          return <div key={index} className="card">
            <div className="notification">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={item.urlToImage}/>
                    </figure>
                    <div className="media-content">
                      <p className="title is-4">
                        {item.title}
                      </p>
                      <p className="subtitle is-6">
                        {item.author}
                      </p>
                      <div className="content">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
        
      </section>
    )
  }
}
export default ShowNews