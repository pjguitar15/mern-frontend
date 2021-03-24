import React, { useRef, useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
import FormComp from './components/FormComp.jsx'
import ListComp from './components/ListComp.jsx'
function App() {
  const [data, setData] = useState([])
  const nameRef = useRef()
  const numRef = useRef()

  useEffect(() => {
    fetch('http://localhost:3001/read').then(res => res.json()).then(data => setData(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // post has 2 arguments 1. route 2. object that will be passed on to the backend
    Axios.post('http://localhost:3001/insert', { personName: nameRef.current.value, age: numRef.current.value })
  }
  return (
    <div className="App">
      <div className='display-4 text-center'>Person</div>
      <FormComp handleSubmit={handleSubmit} nameRef={nameRef} numRef={numRef} />
      <ListComp data={data} />
    </div>
  );
}

export default App;
