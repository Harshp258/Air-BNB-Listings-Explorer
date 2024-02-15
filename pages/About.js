import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';


const about = ({ listing }) => {
  return (
    <div>
      <PageHeader text="About the Developer: Harsh Patel" />

      <Card>
        <Card.Body>
          <p>
          I'm thrilled to introduce myself as Harsh Patel, a dedicated final-semester student in the Computer Programming course at Seneca College. As I approach the culmination of my academic journey, I am eager to channel my skills and passion into a full-time career in Web Development.

Throughout my academic pursuits, I have honed my software development expertise, particularly in crafting dynamic and responsive web applications. My proficiency extends to languages such as JavaScript, NodeJS, and Python, providing me with a versatile skill set to tackle diverse challenges in the web development landscape.

I am enthusiastic about leveraging my knowledge and hands-on experience to contribute effectively to the ever-evolving field of web development. My academic background, coupled with my practical exposure, has equipped me with a solid foundation to thrive in a professional setting.

I am actively seeking opportunities to further enhance my skills and make meaningful contributions to innovative projects. I look forward to the exciting journey ahead and the prospect of bringing my enthusiasm, creativity, and technical prowess to a dynamic web development role.          </p>

          {/* Link to a specific listing */}
          
            <Link href={`/listing/${listing._id}`} passHref>
              <Card.Link>View a specific listing</Card.Link>
            </Link>
        </Card.Body>
      </Card>

      {/* ListingDetails component with the data from getStaticProps */}
      <ListingDetails listing={listing} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const listingId = "1001265";
    const res = await fetch(`https://listingsapi1.onrender.com/api/listings/${listingId}`);
    const listing = await res.json();

    if (!listing) {
      console.error('Listing data is null or undefined');
      return {
        notFound: true,
      };
    }

    return {
      props: {
        listing,
      },
    };
  } catch (error) {
    console.error('Error fetching listing:', error);
    return {
      notFound: true,
    };
  }
}

export default about;