import { useState } from 'react'
import './App.css'
import Video from './components/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Video />
    </>
  )
}

export default App
