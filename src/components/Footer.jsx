
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <Link to="/destinos">Destinos</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <p>© 2026 ConnectFlight</p>
    </footer>
  );
}
