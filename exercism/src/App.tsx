import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Testimonials from './components/Testimonials';

function App() {
  const [currentTrack, setCurrentTrack] = useState<string>('')

  return (
    <div className="App">
      <Navbar />
      <Header currentTrack={currentTrack}/>
      <Testimonials currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
    </div>
  );
}

export default App;
