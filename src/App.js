import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { Form } from 'react-bootstrap'
import FormComp from './components/FormComp.jsx'
import ListComp from './components/ListComp.jsx'
function App() {
  const [data, setData] = useState([])
  const [currUpdateData, setCurrUpdateData] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [numInput, setNumInput] = useState('')


  useEffect(() => {
    fetch('http://localhost:3001/read').then(res => res.json()).then(data => setData(data))
  }, [])

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    window.location.reload();
  }

  const handleUpdate = () => {
    Axios.put('http://localhost:3001/update', { id: currUpdateData.id, newPersonName: currUpdateData.personName, newAge: currUpdateData.age })
    setOpenModal(false)
    window.location.reload();
  }

  const openModalAndSetData = (data) => {
    setOpenModal(true)
    setCurrUpdateData(data)
    console.log(currUpdateData)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    // post has 2 arguments 1. route 2. object that will be passed on to the backend
    Axios.post('http://localhost:3001/insert', { personName: nameInput, age: numInput })
    setNumInput('')
    setNameInput('')
    window.location.reload();
  }
  return (
    <div className="App">
      <div className='display-4 text-center'>Person</div>
      <FormComp handleSubmit={handleSubmit} setNameInput={setNameInput} nameInput={nameInput} numInput={numInput} setNumInput={setNumInput} />
      <ListComp openModalAndSetData={openModalAndSetData} handleDelete={handleDelete} data={data} />

      <Modal okText='Update' title="Update Item" visible={openModal} onOk={handleUpdate} onCancel={() => setOpenModal(false)}>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={(e) => setCurrUpdateData({ ...currUpdateData, personName: e.target.value })} value={currUpdateData.personName} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control onChange={(e) => setCurrUpdateData({ ...currUpdateData, age: e.target.value })} value={currUpdateData.age} />
          </Form.Group>
        </Form>

      </Modal>
    </div>
  );
}

export default App;
