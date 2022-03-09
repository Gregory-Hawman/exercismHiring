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
    <div className="m-8 shadow-all rounded-sm" >
      <div className="toolbar flex justify-between bg-[white] p-4 rounded-t-sm">
        <div className="flex">
          <Dropdown />
          <Filter />
        </div>
        <Sort />
      </div>
      <hr className="w-full border-[#D5D8E4] border-[1px]"/>
      <TestimonialsList />
      <Pagination />
    </div>
  )
}