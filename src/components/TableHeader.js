import React from 'react';
import './TableHeader.css';

const TableHeader = () => {
  return (
    <tr>
      <th>Company</th>
      <th>Price Brand</th>
      <th>Open</th>
      <th>Close</th>
      <th>Issue Size</th>
      <th>Issue Type</th>
      <th>Listing Date</th>
      <th>Status</th>
      <th>Action</th>
      <th>Delete/View</th>
    </tr>
  );
};

export default TableHeader;
