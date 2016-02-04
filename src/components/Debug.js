import React, { PropTypes } from 'react';

const Debug = ({ state }) => {
  return (
    <pre className="border rounded bg-silver p1" style={ styles }>
      { JSON.stringify(state, null, 2) }
    </pre>
  );
};

Debug.defaultProps = {};

Debug.propTypes = {
  state: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.number,
  ]),
};

const styles = {
  overflow: 'auto',
};

export default Debug;
