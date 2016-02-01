import React, { PropTypes } from 'react';
import MessageItem from 'components/MessageItem';
import './style.css';

const propTypes = {
  items: PropTypes.array,
};

const MessagesList = ({ items }) => (
  <div className="messages-list">
    {
      items.map(({ id, user, time, text }) => (
        <MessageItem
          key={ `message_${id}` }
          user={ user }
          time={ time }
          text={ text }
        />
      ))
    }
  </div>
);

MessagesList.propTypes = propTypes;

export default MessagesList;
