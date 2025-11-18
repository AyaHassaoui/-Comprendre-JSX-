
import React from 'react';

function withTimestamp(WrappedComponent) {
  return function Timestamped(props) {
    const now = new Date().toLocaleString();

    return (
      <div>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          Rendu à : {now}
        </p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withTimestamp;
