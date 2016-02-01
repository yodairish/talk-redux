import React, { PropTypes } from 'react';
import './style.css';

const propTypes = {
  name: PropTypes.string,
};

const DialogItem = ({ name }) => <div className="dialog-item">{ name }</div>;

DialogItem.propTypes = propTypes;

export default DialogItem;
