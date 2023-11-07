import React, { useState, Suspense } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import UserForm from './components/UserForm.js';
import SearchBar from './components/SearchBar.js';
import WandererDisplay from './components/WandererDisplay';
import { Canvas} from '@react-three/fiber'
import LiveSphere from './components/LiveSphere';


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };

  return (
    <div className="App">

      <NavBar/> 

      <div className='animated-header-section' >
        <Canvas  shadows >
          <Suspense fallback={null}>
            <LiveSphere/>
          </Suspense>
        </Canvas>
      </div>

      <div className='body-section'>
        <div className='user-form-segment' id='user-form-id'>
          <div className='user-form-segment-parts'>
              <h1 >Leave Your Mark</h1>
          </div>
          <UserForm />
        </div>
        <div className='wanderer-segment' id='wanderer-display-id'>
          <div className='wanderer-segment-parts'>
            <h1 >Look'n For Someone?</h1>
          </div>
          <SearchBar className='wanderer-segment-parts' onSearch={handleSearch}/>
          <WandererDisplay searchQuery={searchQuery} />  
        </div>
      </div>

    </div>
  );
}

export default App;
