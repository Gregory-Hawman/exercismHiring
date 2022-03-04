import React from 'react';
import Dropdown from './Dropdown';
import Filter from './Filter';
import Sort from './Sort'
import TestimonialsList from './TestimonialsList';
import Pagination from './Pagination';

interface Props {
  currentTrack: string
  setCurrentTrack: React.Dispatch<React.SetStateAction<string>>
}

export default function Testimonials({ currentTrack, setCurrentTrack}:Props) {
  

  return (
    <div>
      <div className="flex">
        <Dropdown />
        <Filter />
        <Sort />
      </div>
      <TestimonialsList />
      <Pagination />
    </div>
  )
}