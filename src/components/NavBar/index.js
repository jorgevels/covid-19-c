import React from "react";
import { Nav, Link } from "./styles";
// Se importan los iconos desde react icons
import {
  MdHome,
  MdFavoriteBorder,
  MdPersonOutline,
  MdLanguage,
  MdTimeline,
} from "react-icons/md";

// constante con el tamaño de los iconos
const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link to="covi-19/">
        <MdHome size={SIZE} />
      </Link>
      <Link to="/mundial">
        <MdLanguage size={SIZE} />
      </Link>
      <Link to="/trend">
        <MdTimeline size={SIZE} />
      </Link>
    </Nav>
  );
};