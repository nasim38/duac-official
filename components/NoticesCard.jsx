import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import dayjs from "dayjs";

const NoticesCard = () => {
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/notices"
  );

  if (loading)
    return (
      <div className="px-4 py-2 border">
        <h4>loading...</h4>
      </div>
    );
  if (error)
    return (
      <div className="px-4 py-2 border">
        <h4>Fetch Error!!!</h4>
      </div>
    );

  return (
    <div className="px-4 py-2 border shadow-sm">
      <h4 className="py-2 border-bottom">Notices</h4>
      <div>
        {data.data.map((notice) => (
          <div className="pt-2 border-bottom" key={notice.id}>
            <h6> {notice.attributes.title}</h6>
            <p className="text-black-50 fw-bold">
              Published at:{" "}
              {dayjs(notice.attributes.publishedAt).format(
                "DD-MMM-YYYY, hh:mm A"
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticesCard;
