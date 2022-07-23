import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-scroll";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        PortFolio
      </div>
      <div className={styles.headers}>
        <Link activeClass="active" to="Introduction" spy={true} smooth={true}>
          <div className={styles.item} onClick={() => router.push("/")}>
            Home
          </div>
        </Link>

        <Link activeClass="active" to="About" spy={true} smooth={true}>
          <div className={styles.item} onClick={() => router.push("/#about")}>
            About
          </div>
        </Link>

        <Link activeClass="active" to="Portfolio" spy={true} smooth={true}>
          <div
            className={styles.item}
            onClick={() => router.push("/#portfolio")}
          >
            Work
          </div>
        </Link>

        <Link activeClass="active" to="Experiance" spy={true} smooth={true}>
          <div className={styles.item} onClick={() => router.push("/#skill")}>
            Skills
          </div>
        </Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true}>
          <div className={styles.item}>Contact</div>
        </Link>
      </div>

      {open && (
        <div className={styles.mobile__headers}>
          <div className={styles.icon}>
            <HighlightOffIcon onClick={() => setOpen(false)} />
          </div>
          <Link activeClass="active" to="Introduction" spy={true} smooth={true}>
            <div className={styles.item} onClick={() => router.push("/")}>
              Home
            </div>
          </Link>

          <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
            <div className={styles.item} onClick={() => router.push("/#about")}>
              About
            </div>
          </Link>

          <Link activeClass="active" to="Portfolio" spy={true} smooth={true}>
            <div
              className={styles.item}
              onClick={() => router.push("/#portfolio")}
            >
              Work
            </div>
          </Link>

          <Link activeClass="active" to="Experiance" spy={true} smooth={true}>
            <div className={styles.item} onClick={() => router.push("/#skill")}>
              Skills
            </div>
          </Link>
          <Link activeClass="active" to="Contact" spy={true} smooth={true}>
            <div className={styles.item}>Contact</div>
          </Link>
        </div>
      )}

      {!open && (
        <div className={styles.icon}>
          <MenuIcon onClick={() => setOpen(true)} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
