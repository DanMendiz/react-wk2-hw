import React, { useState } from 'react';
// A Controlled component -

// onChange calls the chageHandler fn which changes the state to the new (inputted) value, that causes the re-render & input changes to the new value in it - this is a controlled loop

function Controlled() {
  // state
  const [value, setter] = useState('start');
  // handler fn
  const changeHandler = (e) => setter(e.target.value);
  // render fn
  return <input type="text" value={value} onChange={changeHandler} />;
}

export default Controlled;
