import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { HashRouter, NavLink, Route, Switch } from "react-router-dom";

import Error404 from "../Pages/Error404";

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
    
    
  };
  const handleDeleteSong = (id) => {
    
    alert('Guardando en favoritos');
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
        <Switch>
          <Route exact path="/">
            <article className="grid-1-3">
              <SongForm handleSearch={handleSearch} />
              
              <h2>Tabla de canciones</h2>
              {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
              )}
            </article>
          </Route>
          <Route exact path="/canciones/:id">
            {/* componente que muestre la pagina de la cacion
             */}
             <h2>Pagina de cancion</h2>
          </Route>
          <Route exact path="*" children={<Error404></Error404>} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
