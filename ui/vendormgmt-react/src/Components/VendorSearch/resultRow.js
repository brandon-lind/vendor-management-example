import React from 'react';
import PropTypes from 'prop-types';

const ResultRow = (props = {}) => {
  const { item } = props;

  return (
    <tr>
      <th scope="row">{item.code}</th>
      <td>{item.name}</td>
      <td>{item.location}</td>
      <td>{item.isActive ? 'Yes' : 'No'}</td>
    </tr>
  );
};

ResultRow.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    isActive: PropTypes.bool
  }).isRequired
};

export default ResultRow;
