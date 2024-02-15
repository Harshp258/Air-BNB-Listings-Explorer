import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { Id } = router.query; 
  const { data, error, isValidating } = useSWR(`https://listingsapi1.onrender.com/api/listings/${Id}`);
  
  if (isValidating) {
    return <p>Loading...</p>;
  }

  if (error) {
    useEffect(() => {
      console.error("Error fetching listing:", error);
    }, []); 
    return <p>Listing not found. Please try again later.</p>;
  }

  
  if (!data) {
    useEffect(() => {
      console.error("Listing data not available.");
    }, []); 
    return <p>Listing not found. Please try again later.</p>;
  }

  const { name } = data;

  return (
    <div>
      <PageHeader text={`Listing: ${name}`} />
      <ListingDetails listing={data} />
    </div>
  );
};

export default Listing;
