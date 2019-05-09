import React from 'react';
import Level from './Level.jsx';

const Description = (props) => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <p className="title is-4">Nova</p>
          <p className="subtitle">GraphQL Schema Visualizer</p>
          <p>Enter a GraphQL endpoint to see a D3 rendered graph of the schema.</p><br/>
          <p>Reach out to us and let us know what you think!</p>
        </div>
        <div className="column is-two-fifths notification is-dark">
          <Level/>
        </div>
      </div>
    </div>
  )
}

export default Description;