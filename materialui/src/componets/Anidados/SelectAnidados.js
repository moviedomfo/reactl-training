import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import Selector from "./Selector";
// import { makeStyles, Theme } from "@material-ui/core/styles";

const SelectAnidados = () => {
  const [pais, setPais] = useState([]);
  const [provincia, setProvincia] = useState(null);
  const [municipio, setMunicipio] = useState(null);
  const [open, setOpen] = useState(false);

  const onChangePais = (selectedItem) => {
    setPais(selectedItem);
  };

  const onChangeProvincia = (selectedItem) => {
    //alert(JSON.stringify(selectedItem));
    setProvincia(selectedItem);
  };
  const onChangeMunicipio = (selectedItem) => {
    setMunicipio(selectedItem);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="grid-1-2">
      <h2> Select anidadoes</h2>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Alert severity="success">
        {pais?.name} - {provincia?.name} -{municipio?.name}
      </Alert>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Selector
        url="http://localhost:50010/paices"
        tittle={"paices"}
        handleChange={(p) => onChangePais(p)}
      ></Selector>

      {pais && (
        <Selector
          url="http://localhost:50010/provincias"
          tittle={"provincias"}
          parentId={pais ? pais.id : null}
          handleChange={(p) => onChangeProvincia(p)}
        ></Selector>
      )}
      {provincia && (
        <Selector
          url="http://localhost:50010/municipios"
          tittle={"municipios"}
          parentId={provincia ? provincia.id : null}
          handleChange={(p) => onChangeMunicipio(p)}
        ></Selector>
      )}
    </div>
  );
};

export default SelectAnidados;
