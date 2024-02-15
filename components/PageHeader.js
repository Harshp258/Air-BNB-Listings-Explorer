import React from 'react'
import { Card, CardTitle } from 'react-bootstrap'
export default function PageHeader({text}) {
   return(
    <>
   
    <div className="page-header">
      <Card className="bg-light">
        <Card.Body>
          <Card.Title>{text}</Card.Title>
           
        </Card.Body>
      </Card>
    </div>
  </>
   )
  }