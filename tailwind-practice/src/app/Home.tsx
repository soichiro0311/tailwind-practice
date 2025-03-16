import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/challenge1">challenge1</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
