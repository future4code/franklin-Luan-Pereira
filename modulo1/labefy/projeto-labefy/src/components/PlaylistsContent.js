import React, { useState, useEffect } from "react";
import axios from "axios";

function PlaylistsContent({ PlaylistID }) {
  const [contentPlaylist, setContentPlaylist] = useState([]);

  const showSongs = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${PlaylistID}/tracks`,
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        setContentPlaylist(
          response.data.result.list
        ); /* VERIFICAR PARA RETORNAR A LISTA DE MUSICAS */
        console.log(contentPlaylist);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  useEffect(showSongs, []);

  return (
    <div>
      {contentPlaylist.map((eachSong) => {
        return (
          <li key={eachSong.id}>{eachSong.result.tracks}</li>
          /* DEPOIS POR UM IFRAME DO YOUTUBE PERSONALIZADO COM A URL DO VIDEO DA MUSICA */
        );
      })}
    </div>
  );
}

export default PlaylistsContent;
