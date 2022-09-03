import React, { useState, useEffect } from 'react';

function Card({ card, showCardBack }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(showCardBack);
  }, [showCardBack]);

  return (
    <div className="col my-3">
      <div className="playing-card-bounding-box">
        <div
          className={`flip-card playing-card ${active ? 'active' : ''}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={'/img/placeholders/' + card.img} className="card-img-top" alt={card.name} />
              {/* <h1>test</h1> */}
            </div>
            <div className="flip-card-back">
              <img
                src="/img/placeholders/card-back-blue.svg"
                className="card-img-top"
                alt={card.name}
              />
              {/* <h1>back</h1> */}
            </div>
          </div>
        </div>
        {/* <div className="card-body">
          <h5 className="card-title text-center">
            {card.name}
          </h5>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
