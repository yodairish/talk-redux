import React, { Component, PropTypes } from 'react';
import DialogItem from 'components/DialogItem';
import './style.css';

const propTypes = {
  items: PropTypes.array,
};

class DialogsList extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.items !== nextProps.items);
  }

  render() {
    return (
      <div className="dialogs-list">
        <p className="dialogs-list__title">Contacts</p>
        {
          this.props.items.map(({ id, name }) => (
            <DialogItem
              key={ `dialog_${id}` }
              name={ name }
            />
          ))
        }
      </div>
    );
  }
}

DialogsList.propTypes = propTypes;

export default DialogsList;
