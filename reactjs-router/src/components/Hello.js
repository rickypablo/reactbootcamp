import React from 'react';

const Hello = ({ match }) => (
    <div>
      <h3>ID: {match.params.names}</h3>
    </div>
)

export default Hello;