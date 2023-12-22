import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App() {
  return (
    <div className="App">
      <ItemListContainer greeting={"Ecommerce - iCompany"}/>
      <NavBar/>
    </div>
  )
}

export default App
