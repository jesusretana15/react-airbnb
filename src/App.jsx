import { useState } from 'react' 
import Navbar from './components/navbar'
import './style.css'
import Header from './components/header'
import Cards from './components/cards'
import Jokes from './components/jokes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Jokes />  */}
     <Navbar/>
     <Header/>
     <Cards/>
    </>
  )
}

export default App
