import React from 'react';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Label from 'react-bootstrap/lib/Label'

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
