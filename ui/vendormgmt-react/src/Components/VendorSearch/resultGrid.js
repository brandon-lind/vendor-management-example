import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import ResultRow from './resultRow';

const ResultGrid = (props = {}) => {
  const { items } = props;

  return (
    <Table striped responsive hover>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Location</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {items && items.map(item => <ResultRow item={item} key={item.code} />)}
      </tbody>
    </Table>
  );
};

ResultGrid.propTypes = {
  // eslint-disable-next-line react/require-default-props
  items: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
      location: PropTypes.string,
      isActive: PropTypes.bool
    })
  )
};

export default ResultGrid;
