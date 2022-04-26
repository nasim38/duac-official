import React from "react";
import dayjs from "dayjs";

const MessageCard = () => {
  return (
    <div className="px-4 py-2 border">
      <div>
        <p>Person Image</p>
        <h4>Person Name</h4>
        <h6>Message Exempt</h6>
        <p>{dayjs(Date()).format("DD-MMM-YYYY, hh:mm A")}</p>
      </div>
    </div>
  );
};

export default MessageCard;
