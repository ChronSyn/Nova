import React from 'react';

const Examples = (props) => {
  const list = ['Pokemon', 'Countries', 'Swapi'];
  const colors = ['is-primary', 'is-warning', 'is-info', 'is-light', 'is-dark'];
  const demoLinks = [];
  demoLinks[0] = 'https://pokeapi-graphiql.herokuapp.com/';
  demoLinks[1] = 'https://countries.trevorblades.com/';
  demoLinks[2] = 'https://swapi.apis.guru';
  const display = list.map((item, i) => {
    return (
      <div key={`${item}${i}`} className="tile is-parent">
        <div 
          className={`tile is-child box notification button ${colors[i]}`}
          onClick={(e) => props.handleUrlClick(demoLinks[i], props.history, {button: true})}
        >
          <p className="title is-5">{item}</p>
        </div>
      </div>
    )
  });
  return (
    <section className="section">
      <p className="title is-4">Demo</p>
      <div className="tile is-ancestor">
        {display}
      </div>
    </section>
  )
}

export default Examples;