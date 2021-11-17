import React, { Fragment, forwardRef } from 'react';

function ContactChild({ ref, ...props }) {
  const showChildAlert = () => {
    alert('Alert from child');
  };

  return (
    <Fragment>
      <span ref={ref} style={{ position: 'absolute', bottom: '33px' }}>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </span>
    </Fragment>
  );
}

export default forwardRef(ContactChild, true);
