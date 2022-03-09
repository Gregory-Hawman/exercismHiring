import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'

interface Testimonial {
  icon: string;
  avatar_url: string;
  mentor: string;
  track: string;
  exercise: string;
  content: string;
  created_at: string
}

export default function TestimonialsList() {
  let [testimonialList, setTestimonialList] = useState<Testimonial[]> ([])

  return (
    <div>
      {testimonialList.map(testimonial => (
        <TestimonialCard 
          testimonialList={testimonialList}
          setTestimonialList={setTestimonialList} 
        />
      ))}

    </div>
  )
}
