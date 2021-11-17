import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const ViewContact = ({ location, history }) => {
  let [fromPage, setFromPage] = useState(location?.state?.from || 'Unkown');
  useEffect(() => {
    console.log('location ', location, ' history ', history);
  });
  return (
    <Fragment>
      <br />
      <span
        style={{ color: 'blue', cursor: 'pointer' }}
        onClick={history.goBack}
      >
        Back to {fromPage}
      </span>
      <br />
      <br />
      <h3>View Contact</h3>
      <div>
        Name: <span>{location?.state?.element?.name}</span>
        <br />
        Num: <span>{location?.state?.element?.num}</span>
        <br />
      </div>
    </Fragment>
  );
};

export default ViewContact;
