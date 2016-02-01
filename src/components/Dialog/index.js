import React, { Component, PropTypes } from 'react';
import MessagesList from 'components/MessagesList';
import MessageEditor from 'components/MessageEditor';
import './style.css';

const propTypes = {
  messages: PropTypes.array,
};

class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.messages !== nextProps.messages);
  }

  render() {
    return (
      <div className="dialog">
        <MessagesList items={ this.props.messages } />
        <MessageEditor />
      </div>
    );
  }
}

Dialog.propTypes = propTypes;

export default Dialog;
