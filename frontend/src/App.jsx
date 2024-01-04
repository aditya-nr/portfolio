import React from 'react'
import './App.scss'
import { Navbar } from './components'
import { About, Footer, Header, Skills, Work } from './sections'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      {/* <Work /> */}
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App