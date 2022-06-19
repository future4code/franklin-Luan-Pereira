import React, { useState, useEffect } from "react";
import axios from "axios";

function CreatePlaylists() {
  const [inputNewPlaylist, setInputNewPlaylist] = useState("");
  //function to create and refresh Playlists
  const createPlaylists = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          name: inputNewPlaylist,
        },
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
    setInputNewPlaylist("")
  };

  return (
    <div>
      <input
        placeholder="Nome da Playlist"
        value={inputNewPlaylist}
        onChange={(element) => {
          setInputNewPlaylist(element.target.value);
        }}
      />

      <button onClick={createPlaylists}>Criar Playlist</button>
    </div>
  );
}

export default CreatePlaylists;
