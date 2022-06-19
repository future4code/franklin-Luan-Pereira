import React, { useState, useEffect } from "react";
import axios from "axios";

function ShowPlaylists() {
  const [playlist, setPlaylist] = useState([]);

  // function to show All Playlists to user
  const showAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        setPlaylist(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  //only refresh playlists after some modification.
  useEffect(showAllPlaylists, []);

  return (
    <div>
      {playlist.map((eachPlaylist) => {
        return <li key={eachPlaylist.id}>{eachPlaylist.name}</li>;
      })}
    </div>
  );
}

export default ShowPlaylists;
