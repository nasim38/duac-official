import React from "react";
import dayjs from "dayjs";

const NoticesCard = () => {
  return (
    <div className="px-4 py-2 border">
      <div>
        <p>Notice Image</p>
        <h4>Notice Name</h4>
        <h6>Notice Description</h6>
        <p>{dayjs(Date()).format("DD-MMM-YYYY, hh:mm A")}</p>
      </div>
    </div>
  );
};

export default NoticesCard;
