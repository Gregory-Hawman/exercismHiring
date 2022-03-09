import { useEffect, useState } from 'react';
import { Testimonial } from '../types/Testimonial';

export default function GetTestimonials(){
    const [results, setResults] = useState<Testimonial[]>([])

    useEffect(() =>{
        fetch('https://exercism.org/api/v2/hiring/testimonials')
        .then(res => res.json())
        .then(res => setResults(res))
        .catch(error => ({ error: error }))
    }, []);

    return results
}
