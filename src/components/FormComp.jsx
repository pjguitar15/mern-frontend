import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
const FormComp = ({ nameRef, numRef, handleSubmit }) => {
  return (
    <Container>
      <Form className='shadow-sm p-4 col-5 mx-auto'>
        <Form.Group>
          <Form.Label>Person Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type='text'
            placeholder='Enter person name'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Person Age</Form.Label>
          <Form.Control
            ref={numRef}
            type='number'
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
