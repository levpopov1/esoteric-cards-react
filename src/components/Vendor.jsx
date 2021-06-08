import React from 'react'

function Vendor({vendor}) {
  return (
  <div className="col-sm-3 my-3">
    <div className="card">
      <img src={vendor.img} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">
          {vendor.name}
        </h5>
      </div>
    </div>
  </div>
  )
}

export default Vendor
