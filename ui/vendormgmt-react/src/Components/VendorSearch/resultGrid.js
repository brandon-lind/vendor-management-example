import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import ResultRow from './resultRow';

const ResultGrid = (props) => {
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
        {
          props.items && 
          props.items.map((item, idx) => <ResultRow item={item} key={idx} />)
        }
      </tbody>
    </Table>
  );
};

ResultGrid.propTypes = {
  items: PropTypes.array
};

export default ResultGrid;
