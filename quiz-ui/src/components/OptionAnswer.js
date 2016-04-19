import React from 'react';
import { ListGroupItem, Label } from 'react-bootstrap';

const OptionAnswer = (
  {
    name,
    selected,
    correct
  }
) =>
<ListGroupItem bsStyle={selected ? (correct ? 'success' : 'danger'):''}>
  {name}
  {' '}
  {selected &&
    <Label bsStyle={(correct ? 'success' : 'danger')}>
      {correct ? 'Well Done' : 'Looser'}
    </Label>
  }
</ListGroupItem>;

export default OptionAnswer;
