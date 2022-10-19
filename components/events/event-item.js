import React from "react";
import Link from "next/link";
import classes from "./event-item.module.css";
function EventItem(props) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const address = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate} </time>
          </div>
          <div className={classes.address}>
            <address>{address}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore more</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
