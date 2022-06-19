import React, { useState, useEffect } from "react";
import axios from "axios";

function AddSongs({ PlaylistID }) {
  const [inputNewSongName, setInputNewSongName] = useState("");
  const [inputNewArtist, setInputNewArtist] = useState("");
  const [inputNewURL, setInputNewURL] = useState("");

  const addSong = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${PlaylistID}/tracks`,
        {
          name: inputNewSongName,
          artist: inputNewArtist,
          url: inputNewURL,
        },
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        console.log("Musica Adicionada");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        placeholder="Nome da Musica"
        value={inputNewSongName}
        onChange={(element) => {
          setInputNewSongName(element.target.value);
        }}
      />
      <input
        placeholder="Nome do Artista"
        value={inputNewArtist}
        onChange={(element) => {
          setInputNewArtist(element.target.value);
        }}
      />
      <input
        placeholder="URL do youtube"
        value={inputNewURL}
        onChange={(element) => {
          setInputNewURL(element.target.value);
        }}
      />
      <button onClick={addSong}>Enviar</button>
    </div>
  );
}

export default AddSongs;
