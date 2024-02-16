import React from 'react';
import { Card } from 'react-bootstrap';

export default function PageHeader( props ) {
  const cardStyle = {
    fontFamily: 'Playfair Display, serif',
  };

  return (
    <>
      <div className="page-header">
        <Card className="bg-light" style={cardStyle}>
          <Card.Body>
            <Card.Title>{props.text}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
