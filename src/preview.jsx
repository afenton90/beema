import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Button } from './index';

const Preview = () => (
  <Fragment>
    <h2>Button</h2>
    <Button>Click Me!</Button>
  </Fragment>
);

ReactDOM.render(<Preview />, document.getElementById('app'));
