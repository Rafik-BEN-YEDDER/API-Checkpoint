import React from 'react'
import { Card } from 'react-bootstrap'
function Cardd({aa}) {
  return (
    <div>            
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{aa.title}</Card.Title>
                <Card.Text>{aa.body}</Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Cardd