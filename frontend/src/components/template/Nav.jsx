/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <aside className="menu-area">
      <nav className="menu">
      {/* TODO component nav-items do menu */}
        <Link to="/">
          <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/users">
          <i className="fa fa-user"></i> Usuários
        </Link>
      </nav>
    </aside>
  )
}