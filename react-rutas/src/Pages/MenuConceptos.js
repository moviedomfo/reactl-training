import React from "react";
import { Link, NavLink } from "react-router-dom";

// Link -> Evita que se cargue todo el DOM . nuevo renderizado
// NavLink -> permite active clase 
const MenuConceptos = () => {
  return (
    <nav>
      <ul>
      <li>
          <a href = "/">Home carga todo e dom (no recomendado)</a>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <NavLink to="/persons" activeClassName="active">Persons</NavLink>
        </li>
        <li>
          <NavLink to="/sales" activeClassName="active">Sales not fount</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuConceptos;
