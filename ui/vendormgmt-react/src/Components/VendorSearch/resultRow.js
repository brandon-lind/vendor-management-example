import React from 'react';
import PropTypes from 'prop-types';

const ResultRow = (props) => {
  const { code, name, location, isActive } = props.item;

  return (
    <tr>
      <th scope="row">{code}</th>
      <td>{name}</td>
      <td>{location}</td>
      <td>{isActive ? 'Yes' : 'No'}</td>
    </tr>
  );
};

ResultRow.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    isActive: PropTypes.bool
  })
};

export default ResultRow;
