import React from 'react';
import { Link } from 'react-router-dom';

function Deck({ deck }) {
  return (
    <div className="col-sm-3 my-3">
      <div className="card">
        <img src={deck.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={'/' + deck.category_slug + '/' + deck.vendor_slug + '/' + deck.slug}>
              {deck.name}
            </Link>
          </h5>
        </div>
        <div className="card-footer">
          <Link to={'/' + deck.category_slug + '/' + deck.vendor_slug}>{deck.vendor}</Link>
        </div>
      </div>
    </div>
  );
}

export default Deck;
