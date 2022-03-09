import React from 'react';
import { Testimonial } from '../types/Testimonial'
import { CgProfile } from 'react-icons/cg';

interface Props {
  testimonialList: Testimonial[]
  setTestimonialList: React.Dispatch<React.SetStateAction<Testimonial[]>>
}



export default function TestimonialCard({testimonialList, setTestimonialList}: Props) {
  return (
    <div className="flex justify-between">
      <div>
        <div>
          {/* Icon */}
        </div>
        <div>
          {/* ProfilePic */}
          <CgProfile />
        </div>
        <div>
          <div>
            {/* Mentor */}
          </div>
          <div>
            {/* on $Exercise in $Track */}
          </div>
        </div>
      </div>

      <div>
          {/* Content */}
      </div>

      <div>
        <div>
          {/* When */}
        </div>
        <div>
          {/* Cheveron */}
        </div>
      </div>
    </div>
  )
}
