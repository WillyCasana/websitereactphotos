import React from 'react';
import logo from './logo.svg';
import './App.css';
import BannerImage from './components/BannerImage';
import PhotoEntry from './components/PhotoEntry';
import AlbumMaker from './components/AlbumMaker';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
         <h1>Welcome to My Photojournal</h1>
         <h3>Willy Casana</h3>
         {/* <PhotoEntry src="berlin.jpg" location="Location" caption="Caption" /> */}
         <AlbumMaker />
        </div>
       
      </header>
    </div>
  );
}

export default App;
