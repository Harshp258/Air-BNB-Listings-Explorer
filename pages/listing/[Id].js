import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { Id } = router.query; 

  // Fetch data using SWR
  const { data, error, isValidating } = useSWR(`https://listingsapi1.onrender.com/api/listings/${Id}`);

  // If data is still loading, return null or a loading indicator
  if (isValidating) {
    return <p>Loading...</p>;
  }

  // If there's an error, redirect to custom 404 page
  if (error) {
    useEffect(() => {
      router.replace('/404');
    }, []); // Ensure this effect runs only once
    return null;
  }

  // If there's no error but no valid data, redirect to custom 404 page
  if (!data) {
    useEffect(() => {
      router.replace('/404');
    }, []); // Ensure this effect runs only once
    return null;
  }

  const { name } = data;

  return (
    <div>
      {/* PageHeader with listing's "name" property */}
      <PageHeader text={`Listing: ${name}`} />

      {/* ListingDetails with "listing" property */}
      <ListingDetails listing={data} />
    </div>
  );
};

export default Listing;
