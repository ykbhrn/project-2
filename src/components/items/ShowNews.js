import React from 'react'
import { getAllNews } from '../../lib/api'
import NavbarTwo from '../common/Navbar2'
import SelectCountry from '../common/SelectCountry'

class ShowNews extends React.Component {

  state={
    news: [],
    country: 'gb'
  }

  async componentDidMount() {
    try {
      const res = await getAllNews(this.state.country)
      this.setState({ news: res.data.articles })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = async event => {
    try {
      await this.setState( { country: event.target.value } )
      this.componentDidMount()
    }  catch (err) {
      console.log(err)
    }
  }

  render() {

   
    return (
      <>
        <NavbarTwo />
        <SelectCountry 
          handleChange={this.handleChange}
        />
        <section className="container is-fluid">
          {this.state.news.map( item  => {
            return <div key={item.title} className="card">
              <div className="notification">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={item.urlToImage} alt={item.title}/>
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
                        <div className="content">
                          {item.publishedAt.split('T').join(' ').split('Z')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}
        
        </section>
      </>
    )
  }
}
export default ShowNews