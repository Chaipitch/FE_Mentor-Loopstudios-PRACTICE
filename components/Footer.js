import React from "react";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import styles from "../styles/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div>
        <h1>loopstudios</h1>
      </div>
      <div className="footer-btm">
        <ul>
          <li>
            <Link className="link" href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link className="link" href="/about">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link className="link" href="/about">
              <a>Events</a>
            </Link>
          </li>
          <li>
            <Link className="link" href="/about">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link className="link" href="/about">
              <a>Support</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="icons">
        <a className="icon">
          <FaFacebookSquare />
        </a>
        <a className="icon">
          <FaTwitter />
        </a>
        <a className="icon">
          <FaPinterest />
        </a>
        <a className="icon">
          <FaInstagram />
        </a>
      </div>
      <div>
        <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
