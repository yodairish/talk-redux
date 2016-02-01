import React from 'react';
import SideBar from 'components/SideBar';
import { users } from 'containers/DialogContainer';

const mockDialogs = [
  {
    id: 0,
    name: 'John',
  },
  {
    id: 1,
    name: 'Kate',
  },
];
const [mockUser] = users;

const SideBarContainer = () => (
  <SideBar
    user={ mockUser }
    dialogs={ mockDialogs }
  />
);

export default SideBarContainer;
