import { useEffect, useState } from 'react';
import { Track } from '../types/Track'

export default function GetTracks(){
    const [results, setResults] = useState<Track[]>([])

    useEffect(() =>{
        fetch('https://exercism.org/api/v2/tracks')
        .then(res => res.json())
        .then(res => setResults(res))
        .catch(error => ({ error: error }))
    }, []);

    return results
}
