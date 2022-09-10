import React from 'react';

function ButtonLoadingSpinner() {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        style={{ position: 'absolute', left: '10px', top: '10px' }}
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Loading...</span>
    </>
  );
}

export default ButtonLoadingSpinner;
