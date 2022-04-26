import React from "react";
import dayjs from "dayjs";

const Events = () => {
  return (
    <div className="px-4 py-2 border">
      <div>
        <p>Event Image</p>
        <h4>Event Name</h4>
        <h6>Event Description</h6>
        <p>{dayjs(Date()).format("DD-MMM-YYYY, hh:mm A")}</p>
      </div>
    </div>
  );
};

export default Events;
