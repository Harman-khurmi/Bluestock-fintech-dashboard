import React from 'react';
import './TableRow.css';
import { FaTrashAlt, FaEye } from 'react-icons/fa';

const TableRow = ({ company, priceBand, open, close, issueSize, issueType, listingDate, status, onUpdate }) => {
  return (
    <tr>
      <td>{company}</td>
      <td>{priceBand}</td>
      <td>{open}</td>
      <td>{close}</td>
      <td>{issueSize}</td>
      <td>{issueType}</td>
      <td>{listingDate}</td>
      <td>
        <button className={`status-button ${status.toLowerCase()}`}>{status}</button>
      </td>
      <td>
        <button onClick={onUpdate}>Update</button>
      </td>
      <td>
        <FaTrashAlt /> <FaEye />
      </td>
    </tr>
  );
};

export default TableRow;
