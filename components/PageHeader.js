import React from 'react';
import { Card } from 'react-bootstrap';

export default function PageHeader({ text }) {
  const cardStyle = {
    fontFamily: 'Playfair Display, serif',
  };

  return (
    <>
      <div className="page-header">
        <Card className="bg-light" style={cardStyle}>
          <Card.Body>
            <Card.Title>{text}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
