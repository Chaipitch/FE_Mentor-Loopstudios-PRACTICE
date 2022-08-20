import { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);

  const navToggle = () => {
    setNav(!nav);
  };

  return (
    <div className={scroll ? "Navbar Navbar-bg" : "Navbar"}>
      <h3>
        <Link href="/" className="link">
          <a>loopstudios</a>
        </Link>
      </h3>

      <ul className={nav ? "nav-menu-active" : "nav-menu"}>
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
      <div className="Burger" onClick={navToggle}>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="rectangle"></div>
      </div>
    </div>
  );
}

export default Navbar;
