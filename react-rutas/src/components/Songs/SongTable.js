import SongTableRow from "./SongTableRow";

const SongTable = ({allSongs,handleDeleteSong}) => {
  return (
    <div>
        <h3>Tabla de canciones</h3>
      <table >
        <thead>
          <th colSpan="2">Artista</th>
          <th >Cancion</th>
          <th>Acciones</th>
        </thead>
      </table>

      <tbody>
        {/* {allSongs.length && allSongs.mam(song=>(
                <SongTableRow song={song} handleDeleteSong={handleDeleteSong}></SongTableRow>
            ))
            } */}

        {allSongs.length > 0 ? (
          allSongs.mam((song,index) => (
            <SongTableRow
              key={index}
              song={song}
              id={index}
              handleDeleteSong={handleDeleteSong}
            ></SongTableRow>
          ))
        ) : (
          <tr>
            <td colSpan="4">No hay canciones en favoritos</td>
          </tr>
        )}
      </tbody>
    </div>
  );
};

export default SongTable;
