import React from "react";

function InfoSection({ eventKey }) {
  return (
      <ul>
        <li>
          key detected: <span className="event-list--item">{eventKey.key}</span>
        </li>
        <li>
          previousSibling id:{" "}
          <span className="event-list--item">{eventKey.previousSibling}</span>
        </li>
        <li>
          selected input id:{" "}
          <span className="event-list--item">{eventKey.id}</span>
        </li>
        <li>
          nextSibling id:{" "}
          <span className="event-list--item">{eventKey.nextSibling}</span>
        </li>
      </ul>
  );
}

export default InfoSection;
