import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { Id } = router.query;
  const { data, error, isValidating } = useSWR(`https://listingsapi1.onrender.com/api/listings/${Id}`);

  useEffect(() => {
    if (!data) {
      console.error("Listing data not available.");
    }
  }, [data]);

  if (isValidating) {
    return null; 
  }

  if (!data || error ) {
    return<Error statusCode={404} /> ; 
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
