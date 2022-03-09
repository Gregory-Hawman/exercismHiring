import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import GetTracks  from './utilities/GetTracks';
import GetTestimonials from './utilities/GetTestimonials';


function App() {
  const [currentTrack, setCurrentTrack] = useState<string>('')

  let trackResults = GetTracks()
  console.log('TRACKS', trackResults)

  let testResults = GetTestimonials()
  console.log('TESTIMONIALS', testResults)

  return (
    <div className="App">
      <Navbar />
      <Header currentTrack={currentTrack}/>
      <Testimonials currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
    </div>
  );
}

export default App;
