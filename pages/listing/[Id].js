import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { Id } = router.query;
  const { data, error, isValidating } = useSWR(`https://listingsapi1.onrender.com/api/listings/${Id}`);

  // Error handling
  useEffect(() => {
    if (error) {
      console.error("Error fetching listing:", error);
    }
  }, [error]);

  // If Data not available
  useEffect(() => {
    if (!data) {
      console.error("Listing data not available.");
    }
  }, [data]);

  if (isValidating) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
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
