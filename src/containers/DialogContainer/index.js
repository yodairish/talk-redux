import React from 'react';
import Dialog from 'components/Dialog';

export const users = [
  {
    name: 'Sam',
    img: '/static/sam.png',
  }, {
    name: 'John',
    img: '/static/john.png',
  }, {
    name: 'Kate',
    img: '/static/kate.png',
  },
];

const mockMessages = [
  [
    {
      id: 0,
      user: users[0],
      time: 1454083743590,
      text: 'Hello John',
    },
    {
      id: 1,
      user: users[1],
      time: 1454084743590,
      text: 'Hi Sam',
    },
    {
      id: 2,
      user: users[0],
      time: 1454085343590,
      text: 'How are You?',
    },
    {
      id: 3,
      user: users[1],
      time: 1454086943590,
      text: 'I\'m fine',
    },
  ],
  [
    {
      id: 4,
      user: users[0],
      time: 1454083743590,
      text: 'Do you like this film?',
    },
    {
      id: 5,
      user: users[2],
      time: 1454084743590,
      text: 'It\'s OK',
    },
  ],
];

const DialogContainer = () => <Dialog messages={ mockMessages[0] } />;

export default DialogContainer;
