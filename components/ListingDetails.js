import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ListingDetails = ({ listing }) => {
  if (!listing) {
    return <p>Loading...</p>; 
  }

  return (
    <Container style={{ backgroundColor: 'white', padding: '20px' }}>
      <Row>
        
        <Col lg>
        <img
        id="photo"
        onError={(event) => {
          event.target.onerror = null;
          event.target.src = 'https://placehold.co/600x400?text=Photo+Not+Available';
        }}
        className="img-fluid w-100"
        src={listing.images.picture_url}
        alt="Listing Photo"
      />
      <br />
      <br />

        </Col>

      
        <Col lg>
          <p>{listing.neighborhood_overview || ''}</p>
          <br />
          <strong>Price:</strong> ${listing.price.toFixed(2)} <br />
          <strong>Room:</strong> {listing.room_type} <br />
          <strong>Bed:</strong> {listing.bed_type} ({listing.beds} bed{listing.beds !== 1 ? 's' : ''}) <br />
          <br />
          <strong>Rating:</strong> {listing.review_scores.review_scores_rating}/100 ({listing.number_of_reviews} Reviews) <br />
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
