import React from 'react';

function Card({card}) {

  return (
    <div className="col-sm-3 my-3">
      <div className="card">
        <img src={card.img} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">
            {card.name}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Card
