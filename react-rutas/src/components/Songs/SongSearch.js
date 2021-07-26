import React, { useState, useEffect } from "react";

import Loader from "../Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

import Error404 from "../../Pages/Error404";
import SongTable from "./SongTable";
import SongPage from "./SongPage";
import { helpHttp } from "../../helpers/helpHttp";

const mySongsInit = JSON.parse(localStorage.getItem ('mySongs')) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);


  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      //alert(JSON.stringify(artistRes) );
      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
    
    localStorage.setItem('mySongs',JSON.stringify(mySongs));
  }, [search,mySongs]);


  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  const handleSearchSong = () => {

    let newSong =  {
      search,lyric,bio
    };

    setMySongs(()=>[...mySongs,newSong]);

    setSearch(null);
    
  };
  
  const handleDeleteSong = (id) => {
       let remove = window.confirm(`Seguro de eliminar la cancion con id : ${id} `);
      if(remove){
        let newList = mySongs.filter((el) => el.id !== id);
        setMySongs(newList);
        localStorage.setItem('mySongs',JSON.stringify(newList));
      }
    };
  return (
    <div>
      <HashRouter basename="canciones">
        <header>
          <h2>Song Search</h2>
          <nav>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
           
          </nav>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
        <Switch>
          <Route exact path="/">
           
              <SongForm handleSearch={handleSearch} />
              <SongTable allSongs={mySongs} handleDeleteSong={handleDeleteSong}></SongTable>

              {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
              )}
           
          </Route>
          
          <Route exact path="/:id" children={<SongPage mySongs={mySongs}></SongPage> }
          />
          <Route exact path="*" children={<Error404/>} />
        </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
