import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import InfoSection from "./InfoSection";

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
  const [eventKey2, setEventKey2] = useState({});
  const [handleAllEl, setHandleAllEl] = useState(false);
  return (
    <div>
      <p>KeyboardEventHandler:</p>
      <InfoSection eventKey={eventKey} />
      <div>
        <input
          type="checkbox"
          id="id1"
          onChange={() => setHandleAllEl(!handleAllEl)}
          checked={handleAllEl}
        />
        <label for="id1">handleFocusableElements</label>
      </div>
      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) => onKeyEvent(e, setEventKey)}
        handleFocusableElements={handleAllEl}
      />
      <input id="input1" />
      <input id="input2" />
      <input id="input3" />
      <hr />
      <p>KeyboardEventHandler only for wrapped children:</p>
      <InfoSection eventKey={eventKey2} />
      <KeyboardEventHandler
        handleKeys={["all"]}
        onKeyEvent={(key, e) => onKeyEvent(e, setEventKey2)}
      >
        <input id="input1" />
        <input id="input2" />
        <input id="input3" />
        <button id="button1">button1</button>
      </KeyboardEventHandler>
      <hr />
    </div>
  );
}

export default ExampleB;
