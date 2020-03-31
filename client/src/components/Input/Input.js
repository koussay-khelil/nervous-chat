import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message, sendImage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button value='upload' style={{backgroundColor: "#000"}} className="sendButton" onClick={e => sendImage(e)}>Upload</button>
    <input type="file" name="myfile" />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;