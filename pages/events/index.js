import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventSearch from "./events-search";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
