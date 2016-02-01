import React, { Component, PropTypes } from 'react';
import './style.css';

const propTypes = {
  user: PropTypes.object,
  time: PropTypes.number,
  text: PropTypes.string,
};

class MessagesItem extends Component {
  constructor(props) {
    super(props);
  }

  getFormatedTime(time) {
    const date = new Date(time);

    return `${date.getHours()}:${date.getMinutes()}`;
  }

  render() {
    const { user, time, text } = this.props;

    return (
      <div className="message-item">
        <img
          className="message-item__img"
          src={ user.img }
        />
        <span className="message-item__name">{ user.name }</span>
        <span className="message-item__time">
          { this.getFormatedTime(time) }
        </span>
        <p className="message-item__body">{ text }</p>
      </div>
    );
  }
}

MessagesItem.propTypes = propTypes;

export default MessagesItem;
