import React, { Component, PropTypes } from 'react';
import './style.css';

const propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

class User extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.img !== nextProps.img ||
      this.props.name !== nextProps.name
    );
  }

  render() {
    return (
      <div className="user">
        <img
          className="user__img"
          src={ this.props.img }
        />
        <p className="user__name">{ this.props.name }</p>
      </div>
    );
  }
}

User.propTypes = propTypes;

export default User;
