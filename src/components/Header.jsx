
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        ConnectFlight
      </Link>

      <nav>
        <Link to="/destinos">Destinos</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}
