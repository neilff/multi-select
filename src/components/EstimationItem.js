import React, { PropTypes } from 'react';
import classNames from 'classnames';

const EstimationItem = (props) => {
  const {
    id,
    category,
    onClick,
    selectType,
    title,
    value,
    active,
  } = props;

  const classes = classNames({
    'bg-red': active,
    'bg-blue': !active,
  });

  return (
    <div
      onClick={ () => onClick({ id, category, value, selectType }) }
      style={ styles.card }
      className={ `border white p2 m2 rounded ${ classes }` }>
      <h3>{ title }</h3>
      <h5>{ `$${ value }` }</h5>
    </div>
  );
}

EstimationItem.defaultName = 'EstimationItem';

EstimationItem.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  selectType: PropTypes.oneOf(['multi', 'single']),
  title: PropTypes.string,
  value: PropTypes.number,
  active: PropTypes.bool,
};

EstimationItem.defaultProps = {
  id: '',
  category: '',
  selectType: 'empty',
  title: '',
  value: 0,
  active: false,
};

const styles = {
  card: {
    width: '128px',
    height: '128px',
    display: 'inline-block',
  },
};

export default EstimationItem;
