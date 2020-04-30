import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ShowNews from './components/items/ShowNews'

const App = () => {

  


  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={ShowNews} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
