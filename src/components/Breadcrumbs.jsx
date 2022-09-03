import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function PathChunk({ chunks, name, current }) {
  return (
    <li className={`nav-item ${current ? 'last' : ''}`}>
      <Link
        to={'/' + chunks.join('/')}
        className={`nav-link path-chunk ${current ? 'fw-bold' : ''}`}
        aria-current={current ? 'true' : 'false'}
      >
        {name}
      </Link>
    </li>
  );
}

function Home() {
  return (
    <li className="nav-item home">
      <Link to="/" className="nav-link">
        <i className="bi bi-house-door"></i>
        <span className="ms-2">Home</span>
      </Link>
    </li>
  );
}

function Breadcrumbs() {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    const locs = location.pathname.split('/').slice(1);

    const blocks = locs.map((item, index, locs) => (
      <PathChunk
        key={index}
        chunks={locs.slice(0, index + 1)}
        name={item}
        current={Boolean(index === locs.length - 1)}
      />
    ));

    setCrumbs(blocks);
  }, [location]);

  return (
    <div className="breadcrumbs">
      <ul className="nav" aria-label="breadcrumb">
        <Home />
        {crumbs}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
