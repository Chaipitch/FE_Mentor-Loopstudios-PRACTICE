import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={scroll ? "Navbar Navbar-bg" : "Navbar"}>
      <h3>
        <Link href="/" className="link">
          <a>loopstudios</a>
        </Link>
      </h3>

      <ul>
        <li>
          <Link className="link" href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link className="link" href="/careers">
            <a>Careers</a>
          </Link>
        </li>
        <li>
          <Link className="link" href="/events">
            <a>Events</a>
          </Link>
        </li>
        <li>
          <Link className="link" href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link className="link" href="/support">
            <a>Support</a>
          </Link>
        </li>
      </ul>
      <div className="Burger">
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
      </div>
    </div>
  );
}

export default Navbar;
