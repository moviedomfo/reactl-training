import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch,handleSearchSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisable] = useState(false);

    const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos Incompletos");
      setIsDisable(true);
      return;
    }

    handleSearch(form);
    setForm(initialForm);

    setIsDisable(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
        <input type="button" onClick={handleSearchSong} 
           disabled = {isDisabled && 'disabled'} 
          value="Guardar cancion" />
        
      </form>
    </div>
  );
};

export default SongForm;
