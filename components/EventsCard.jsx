import React from "react";
import dayjs from "dayjs";
import { Image } from "react-bootstrap";

const EventsCard = () => {
  // sample event data ----------------------
  const eventDate = dayjs(Date()).format("DD-MMM-YYYY, hh:mm A");
  const eventData = [
    {
      name: "Centenary Celebration 2022",
      description:
        "Celebreating 100 year anniversary of University of Dhaka at Chattogram",
      venue: "Foys Lake",
      date: eventDate,
      isRegistrationOn: false,
      eventPoster: "/event-posters/4.jpg",
    },
    {
      name: "Iftar Mahfil 2022",
      description:
        "Arranging an Iftar Mahfil with all the alumni of University of Dhaka at Chattogram",
      venue: "Grand Mogul Restaurant",
      date: eventDate,
      isRegistrationOn: true,
      eventPoster: "/event-posters/4.jpg",
    },
  ];
  // returning the component here -----------------------
  return (
    <div className="px-4 py-2 border">
      {eventData.map((event) => (
        <div
          key={event.name}
          className="d-flex border-bottom gap-4 align-items-center justify-content-center"
        >
          <Image
            height={120}
            width={120}
            src={event.eventPoster}
            alt={event.name}
          />
          <div className="mt-4">
            <p
              className={
                event.isRegistrationOn
                  ? "text-white fw-bold bg-success rounded-pill px-4 py-1"
                  : "d-none"
              }
            >
              Registration Going on!
            </p>
            <h5>{event.name}</h5>
            <h6 className="text-muted">{event.description}</h6>
            <p className="text-black-50">{event.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsCard;
