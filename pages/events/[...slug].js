import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage(props) {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return (
      <>
        <p className="center">Loading...</p>
      </>
    );
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Input </p>;
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return;
    <>
      <p className="center">No event found for the chosen filter</p>;
      <Button>
        <Link href="/">Home</Link>
      </Button>
    </>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
