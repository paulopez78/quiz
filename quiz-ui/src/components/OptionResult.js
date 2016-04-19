import React from 'react';
import { ProgressBar } from 'react-bootstrap'

const percent = (result, total) => Math.round((result/total) * 100);

const OptionResult = ({ name, result, total }) =>
  <div>
  {name}
   <ProgressBar
      now={percent(result, total)}
      bsStyle={percent(result,total) >= 35 ? "success" : "danger"}
      label="%(percent)s%" />
  </div>

export default OptionResult;
