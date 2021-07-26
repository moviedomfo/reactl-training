import { useHistory } from "react-router-dom";

const avatarStyles = {
  width: "auto",
  height: "40px",
};

const SongTableRow = ({ song, id, handleDeleteSong }) => {

  console.log(song);
  let history = useHistory();

  const { bio, search } = song;
  const avatar = bio.artists[0].strArtistThumb;

  const onClickVer = () => {
    //history.push(`/canciones/${id}`);
    history.push(`/${id}`);
  }

  return (
    <tr>
      <td>
        <img style={avatarStyles} src={avatar} alt={search.artist}></img>
      </td>
      <td>{song.artist}</td>
      <td>{song.song} </td>
      <td>
        <button onClick={onClickVer()}>Ver</button>
        <button onClick={handleDeleteSong}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
