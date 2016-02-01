import React from 'react';
import './style.css';

const MessageEditor = () => (
  <div className="message-editor">
    <textarea
      className="message-editor__input"
      placeholder="Message"
    />
    <button className="message-editor__send">Send</button>
  </div>
);

export default MessageEditor;
