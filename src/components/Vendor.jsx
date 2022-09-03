import React from 'react';
import { Link } from 'react-router-dom';

function Vendor({ vendor }) {
  return (
    <div className="col-sm-3 my-3">
      <div className="card">
        <img src={vendor.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/vendors/${vendor.slug}`} className="strectched-link">
              {vendor.name}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Vendor;
