import "./Nav.css";

export default function Nav(props) {
  return (
    <aside className="menu-area">
      <nav className="menu">
      {/* TODO component nav-items do menu */}
        <a href="#">
          <i className="fa fa-home"></i> Início
        </a>
        <a href="#users">
          <i className="fa fa-user"></i> Usuários
        </a>
      </nav>
    </aside>
  )
}