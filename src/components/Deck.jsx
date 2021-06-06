import React from 'react'

function Deck({deck}) {
  return (
    <div className="col-sm-3 my-3">
    <div className="card">
      <img src={deck.img} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">
          {deck.name}
        </h5>
      </div>
    </div>
  </div>
  )
}

export default Deck
