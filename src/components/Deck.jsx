import React from 'react'

function Deck({deck}) {
  return (
    <div className="col-sm-3 my-3">
    <div className="card">
      <img src={deck.img} className="card-img-top" alt=""/>
      <div className="card-body">
        {deck.name}
      </div>
    </div>
  </div>
  )
}

export default Deck
