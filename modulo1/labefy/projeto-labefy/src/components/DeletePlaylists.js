import React, { useState, useEffect } from "react";
import axios from "axios";

function DeletePlaylists() {
  const [idPlaylist, setIdPlaylist] = useState("");
  const [inputPlaylistDelete, setInputPlaylistDelete] = useState("");

  // First of all, lets search the ID playlist
  const searchPlaylist = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${inputPlaylistDelete}`,
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        setIdPlaylist(
          response.data.result.playlist[0].id
        );
        console.log(`id da playlist em questão: ${idPlaylist}`);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  // Now, we'll delete the playlist
  const deletePlaylist = () => {
    searchPlaylist()
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        console.log("playlist removida com sucesso");
      })
      .catch((error) => {
        console.log(error.code);
      });
  };



  return (
    <div>
      <input
        placeholder="Nome da Playlist"
        value={inputPlaylistDelete}
        onChange={(event) => {
          setInputPlaylistDelete(event.target.value);
        }}
      />
      <button onClick={deletePlaylist}>Apagar Playlist</button>
    </div>
  );
}

export default DeletePlaylists;
