import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/Card'
import './App.css'
import Navbar from './component/navbar'

const App = () => {
  return (
    <div>
      <Card />
      <div>{Card()}</div>
<div><Navbar /></div>
<div><Navbar /></div>
    </div>
  )
}
export default App
