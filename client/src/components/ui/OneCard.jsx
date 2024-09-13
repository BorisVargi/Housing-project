import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function OneCard({ card }) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={card.image || 'holder.js/100px180'} alt={card.name} /> */}
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
        <Button variant="primary">Подробнее</Button>
      </Card.Body>
    </Card>
  );
}

  

