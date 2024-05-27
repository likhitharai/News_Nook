// import React from 'react'
import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import Footer from "./components/Footer"

const App = () => {
  const [catergory, setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory = {setCategory} />
      <NewsBoard catergory = {catergory}/>
      <Footer />
      
    </div>
  )
}

export default App
