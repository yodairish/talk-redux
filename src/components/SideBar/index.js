import React, { Component, PropTypes } from 'react';
import DialogsList from 'components/DialogsList';
import User from 'components/User';
import './style.css';

const propTypes = {
  user: PropTypes.object,
  dialogs: PropTypes.array,
};

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.user !== nextProps.user ||
      this.props.dialogs !== nextProps.dialogs
    );
  }

  render() {
    const { user, dialogs } = this.props;

    return (
      <div className="sidebar">
        <User
          name={ user.name }
          img={ user.img }
        />
        <DialogsList items={ dialogs } />
      </div>
    );
  }
}

SideBar.propTypes = propTypes;

export default SideBar;
