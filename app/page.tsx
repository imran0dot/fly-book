import Bookings from '@/components/Bookings';
import BookingForm from '@/components/shared/BookingForm';
import React from 'react';

const Home = () => {
  return (
    <div>
      <BookingForm />
      <Bookings />
    </div>
  );
};

export default Home;