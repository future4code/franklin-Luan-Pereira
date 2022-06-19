import './App.css';

import React, { useState, useEffect } from 'react';
import axios from "axios";

import AddSongs from './components/AddSongs';
import PlaylistsContent from './components/PlaylistsContent';
import ShowPlaylists from './components/ShowPlaylists';
import CreatePlaylists from './components/CreatePlaylists';
import DeletePlaylists from './components/DeletePlaylists';

function App() {

  return (
    <div className='App'>
      <ShowPlaylists />
      <CreatePlaylists />
      <DeletePlaylists />
    </div>
  );
}

export default App;
