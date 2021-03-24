import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
const FormComp = ({
  nameInput,
  setNameInput,
  numInput,
  setNumInput,
  handleSubmit,
}) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit} className='shadow-sm p-4 col-5 mx-auto'>
        <Form.Group>
          <Form.Label>Person Name</Form.Label>
          <Form.Control
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            type='text'
            placeholder='Enter person name'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Person Age</Form.Label>
          <Form.Control
            value={numInput}
            onChange={(e) => setNumInput(e.target.value)}
            type='text'
            placeholder='Enter person age'
          />
        </Form.Group>
        <Button onClick={handleSubmit} size='sm' variant='warning w-100'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default FormComp
