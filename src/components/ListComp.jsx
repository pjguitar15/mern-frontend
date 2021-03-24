import React from 'react'
import { ListGroup, Container, Button } from 'react-bootstrap'

const ListComp = ({ data, handleDelete, openModalAndSetData }) => {
  return (
    <Container className='mt-5'>
      <ListGroup className='shadow-sm p-4 col-5 mx-auto'>
        {data.map((item, index) => (
          <ListGroup.Item
            key={index}
            className='d-flex justify-content-between align-items-center text-left'
          >
            <div>
              <div>
                <h5>
                  Name:{' '}
                  <span className='font-weight-light'>{item.personName}</span>
                </h5>
              </div>
              <div>
                <h5>
                  Age: <span className='font-weight-light'>{item.age}</span>
                </h5>
              </div>
            </div>
            <div>
              <Button
                onClick={() =>
                  openModalAndSetData({
                    id: item._id,
                    personName: item.personName,
                    age: item.age,
                  })
                }
                variant='info mr-1'
                size='sm'
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(item._id)}
                variant='danger'
                size='sm'
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  )
}

export default ListComp
