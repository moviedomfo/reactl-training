import React from "react";
import { useParams } from "react-router-dom";
import SongDetails from "./SongDetails";
//song { search, lyric, bio }
const SongPage = ({ mySongs }) => {
  //destructuramos el param : id
  let { id } = useParams();

  //const currentSong = mySongs.find(p=>p.id === id ) ;
  const currentSong = mySongs[id];
  const [searh, lyric, bio] = currentSong[id];

  return <SongDetails searh={searh} lyric={lyric} bio={bio}></SongDetails>;
};

export default SongPage;
