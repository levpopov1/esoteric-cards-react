import React from 'react';

function NetworkError({ error }) {
  return (
    <div className="mt-3">
      <div className="invalid-feedback text-center fw-bold">Error: {error}</div>
    </div>
  );
}

export default NetworkError;
