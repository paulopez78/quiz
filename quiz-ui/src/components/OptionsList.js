import React from 'react';
import Option from './Option';
import OptionAnswer from './OptionAnswer';
import OptionResult from './OptionResult';

import ListGroup from 'react-bootstrap/lib/ListGroup';

const OptionsList = ({
  options,
  answerVisible,
  resultVisible,
  selected,
  total,
  selectOption
}) =>
    <ListGroup>
      {answerVisible
        ?
        options.map(({ id, name, correct }) =>
            <OptionAnswer
              key={id}
              correct={correct}
              selected={selected === id}
              name={name}/>
          )
        :
        resultVisible ?
        options.map(({ id, name, result }) =>
            <OptionResult
              key={id}
              name={name}
              total={total}
              result={result}>
            </OptionResult>
          )
        :
        options.map(({ id, name }) =>
            <Option
              key={id}
              selected={selected === id}
              onClick={() => selectOption(id)}
              name={name}>
            </Option>
          )
        }
    </ListGroup>;

export default OptionsList;
