import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="404">
      <h1>404 - Page Not Found!</h1>
      <Link to="/">
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
