import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";

function MainHeader(props) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/"> NextJS Event Manager</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            {" "}
            <Link href="/events">All events</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
