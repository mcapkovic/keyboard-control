import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

function onKeyEvent(event, setEventKey) {
//   console.log(event);
  const { id, previousSibling, nextSibling } = event.target;
  setEventKey({
    key: event.key,
    id,
    previousSibling: previousSibling && previousSibling.id,
    nextSibling: nextSibling && nextSibling.id
  });
}

function ExampleB(props) {
  const [eventKey, setEventKey] = useState({});
  return (
    <div>
      <p>KeyboardEventHandler:</p>
      <ul>
        <li>
          key detected: <span className='event-list--item'>{eventKey.key}</span>
        </li>
        <li>
          previousSibling id: <span className='event-list--item'>{eventKey.previousSibling}</span>
        </li>
        <li>
          selected input id: <span className='event-list--item'>{eventKey.id}</span>
        </li>
        <li>
          nextSibling id: <span className='event-list--item'>{eventKey.nextSibling}</span>
        </li>
      </ul>
      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) => onKeyEvent(e, setEventKey)}
      >
        <input id="input1" />
        <input id="input2" />
        <input id="input3" />
        <button id="button1">button1</button>
      </KeyboardEventHandler>
    </div>
  );
}

export default ExampleB;
