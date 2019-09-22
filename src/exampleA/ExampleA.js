import React, { useState } from 'react';
import {
  moveOnMax,
  moveOnBackspace,
  arrows,
  nextElement,
  prevElement,
} from '../utils';

function onDown(event, inputId) {
  if (event.altKey) {
    switch (arrows(event)) {
      case "right":
        nextElement(event);
        break;
      case "left":
        prevElement(event);
        break;
      default:
        break;
    }
  } else { moveOnBackspace(event, inputId) }
}

function ExampleA() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <div>
      <input
        style={{ width: '50px', marginRight: '5px' }}
        id='input1'
        value={input1}
        maxLength={4}
        onChange={event => setInput1(event.target.value)}
        onKeyUp={e => moveOnMax(e, 'input2')}
        onKeyDown={e => onDown(e, 'input1')}
      />
      <input
        style={{ width: '50px', marginRight: '5px' }}
        id='input2'
        maxLength={4}
        value={input2}
        onChange={event => setInput2(event.target.value)}
        onKeyUp={e => moveOnMax(e, 'input3')}
        onKeyDown={e => onDown(e, 'input1')}
      />
      <input
        style={{ width: '50px', marginRight: '5px' }}
        id='input3'
        maxLength={4}
        value={input3}
        onChange={event => setInput3(event.target.value)}
        onKeyDown={e => onDown(e, 'input2')}
      />
    </div>
  );
}

export default ExampleA;