import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Option = (
  {
    name,
    selected,
    onClick
  }
) =>
  <ListGroupItem
    onClick={onClick}
    active={selected}>
      {name}
    </ListGroupItem>

export default Option;
