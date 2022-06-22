import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import playlistimage from "./assets/playlist-image.png"

function App() {

  const MyPlaylists = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  `

  const EachPlaylist = styled.div`
    background-color:#262626;
    margin: 3px 0;
    display: flex;
    align-items: center;
    transition: 0.5s;
    &:hover{
      background-color: #323133;
    }

  `

  const ImagePlaylist = styled.img`
    max-width: 65px;
  `

  const DeletePlaylistButton = styled.button`
    background-color: red;
    color: red;
    width: 4px;
    height: 100%;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
      background-color: pink;
    }
  `

  const ButtonShowTracks = styled.button`
    background-color: transparent;
    width: 100%;
    border: none;
    color: white;
    text-transform: capitalize;
    font-weight: bold;
    text-align: left;
    font-size: 18px;
    margin-left: 5px;
  `

  const DeleteSongButton = styled.button`
    background-color: red;
    color: red;
    width: 4px;
    border: none;
    cursor: pointer;
    transition: 0.7s;
    &:hover{
      background-color: pink;
    }
  `





  // State to Playlist
  const [playlist, setPlaylist] = useState([]);
  const [inputNewPlaylist, setInputNewPlaylist] = useState("");
  const [inputPlaylistDelete, setInputPlaylistDelete] = useState("");
  const [contentPlaylist, setContentPlaylist] = useState([]);
  // State to Song
  const [inputNewSongName, setInputNewSongName] = useState("");
  const [inputNewArtist, setInputNewArtist] = useState("");
  const [inputNewURL, setInputNewURL] = useState("");
  // State to Playlist
  const [idPlaylist, setIdPlaylist] = useState("");

  // function to show All Playlists to user
  const getAllPlaylists = () => {
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
        console.log("Deu bom!")
        console.log(response.data.result.list.id)
        setPlaylist(response.data.result.list)
        setInputNewPlaylist("")
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

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
        console.log("Playlist Criada");
        getAllPlaylists()
      })
      .catch((error) => {
        console.log(error);
      });
    setInputNewPlaylist("");
  };

  // function to Delete the playlist
  const deletePlaylist = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        console.log("playlist removida com sucesso");
        getAllPlaylists()
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  // function to show the Playlist content
  const getPlaylistTracks = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "luan-wallace-franklin",
          },
        }
      )
      .then((response) => {
        setContentPlaylist(
          response.data.result.tracks
        );
        console.log(response.data.result.tracks);
      })
      .catch((error) => {
        console.log(error.code);
      });

      setIdPlaylist(id)
  };

  // function to Add songs
  const addSong = (id) => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
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
        console.log("Musica Adicionada!");
        console.log(response.data.result)
        getPlaylistTracks(id)
        setInputNewSongName("")
        setInputNewArtist("")
        setInputNewURL("")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function to delete songs
  const deleteSong = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks/${id}`

    axios.delete(url, {
      headers: {
        Authorization: "luan-wallace-franklin"
      }
    })
      .then((response) => {
        console.log(response);
        getPlaylistTracks(idPlaylist)
      })
      .catch((error) => {
        console.log(error);
      })
}


  //Show playlists after page load
  useEffect(getAllPlaylists, []);
  return (
    <div className="App">
      <div className="container">
          <h1> Bom dia </h1>
        <MyPlaylists>
          {playlist.map((eachPlaylist) => {
            return (
              <EachPlaylist>
                <DeletePlaylistButton onClick={() => deletePlaylist(eachPlaylist.id)}/>
                <ImagePlaylist src={playlistimage}/>
                <ButtonShowTracks onClick={() => {getPlaylistTracks(eachPlaylist.id)}}>
                  <p key={eachPlaylist.id}>{eachPlaylist.name} </p>
                </ButtonShowTracks>
              </EachPlaylist>
            );
          })}
        </MyPlaylists>
        <div>
          <h2> Faça suas playlists </h2>
          <input
            placeholder="Nome da Playlist"
            value={inputNewPlaylist}
            onChange={(element) => {
              setInputNewPlaylist(element.target.value);
            }}
          />
          <button onClick={createPlaylists}>Criar Playlist</button>
        </div>
        <div>
          <h2> Escolhidas por você </h2>
          <h3> Adicionar música</h3>
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
          <button onClick={() => addSong(idPlaylist)}>Enviar</button>
          </div>
          <br/>
          <div>
          {contentPlaylist.map((eachSong) => {
            return (
              <div style={{color:'white', display:"flex", textAlign:"left", margin:"15px", backgroundColor: "#262626"}}>                 {/* I found a bug in iframe when I use styled-component in that tag! */}
                <DeleteSongButton onClick={() => {deleteSong(eachSong.id)}}/>
                <iframe width="130" height="80" src={eachSong.url.replace("watch?v=","embed/").concat("?controls=0")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  />
                <ul style={{listStyle:"none"}}>
                  <li style={{fontWeight:"bold"}}>{eachSong.name}</li>
                  <li>{eachSong.artist}</li>
                </ul>
              </div>
            );
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
