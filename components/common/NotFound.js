import React, { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  withRouter,
} from 'react-router-dom';

const NotFound = (props) => {
  useEffect(() => {
    console.log('NotFound ', props);
  });
  const [fromPage, setFromPage] = useState(props.location.state.from);
  return (
    <Fragment>
      <div>
        <br />
        <br />
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => props.history.goBack()}
        >
          Back to {fromPage}
        </span>
      </div>
      <h1>404</h1>
    </Fragment>
  );
};

export default withRouter(NotFound);
