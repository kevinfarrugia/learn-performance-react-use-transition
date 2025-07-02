import { Link, useRoute } from "wouter";

export default function Nav() {
  // TODO: Refactor into a DRY component
  const [isHomeActive] = useRoute("/");
  const [isOneActive] = useRoute("/1");
  const [isTwoActive] = useRoute("/2");
  const [isThreeActive] = useRoute("/3");

  return (
    <nav className="drawer">
      <ol>
        <li className={isHomeActive ? "selected" : undefined}>
          <Link href="/">
            <a href="/">
              <span className="step">Welcome</span>
            </a>
          </Link>
        </li>
        <li className={isOneActive ? "selected" : undefined}>
          <Link href="/1">
            <a href="/1">
              <span className="step">Blocking</span>
            </a>
          </Link>
        </li>
        <li className={isTwoActive ? "selected" : undefined}>
          <Link href="/2">
            <a href="/2">
              <span className="step">
                <code>useTransition</code>
              </span>
            </a>
          </Link>
        </li>
        <li className={isThreeActive ? "selected" : undefined}>
          <Link href="/3">
            <a href="/3">
              <span className="step">
                <code>Yielding</code>
              </span>
            </a>
          </Link>
        </li>
      </ol>
    </nav>
  );
}
