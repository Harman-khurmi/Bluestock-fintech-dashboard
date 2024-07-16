import React, { useState } from 'react';
import TableHeader from '../components/TableHeader';
import Pagination from '../components/Pagination';
import './ManageIPO.css';

const ManageIPO = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 13; // Set total pages as required

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUpdate = () => {
    // Placeholder for the update logic
    console.log('Update button clicked');
  };

  const getTableDataForPage = (page) => {
    // Define your data for each page
    const data = {
      1: [
        { company: 'Company 1', price: 100, open: '2023-07-01', close: '2023-07-10', issueSize: '100 Cr', issueType: 'Type A', listingDate: '2023-07-20', status: 'ongoing' },
        { company: 'Company 2', price: 200, open: '2023-07-02', close: '2023-07-11', issueSize: '200 Cr', issueType: 'Type B', listingDate: '2023-07-21', status: 'upcoming' },
        { company: 'Company 3', price: 300, open: '2023-07-03', close: '2023-07-12', issueSize: '300 Cr', issueType: 'Type C', listingDate: '2023-07-22', status: 'newlisted' }
      ],
      2: [
        { company: 'Company 4', price: 400, open: '2023-07-04', close: '2023-07-13', issueSize: '400 Cr', issueType: 'Type D', listingDate: '2023-07-23', status: 'ongoing' },
        { company: 'Company 5', price: 500, open: '2023-07-05', close: '2023-07-14', issueSize: '500 Cr', issueType: 'Type E', listingDate: '2023-07-24', status: 'upcoming' },
        { company: 'Company 6', price: 600, open: '2023-07-06', close: '2023-07-15', issueSize: '600 Cr', issueType: 'Type F', listingDate: '2023-07-25', status: 'newlisted' }
      ],
      3: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      4: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      5: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      6: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      7: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      8: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      9: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      10: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      11: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      12: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      13: [
        { company: 'Company 7', price: 700, open: '2023-07-07', close: '2023-07-16', issueSize: '700 Cr', issueType: 'Type G', listingDate: '2023-07-26', status: 'ongoing' },
        { company: 'Company 8', price: 800, open: '2023-07-08', close: '2023-07-17', issueSize: '800 Cr', issueType: 'Type H', listingDate: '2023-07-27', status: 'upcoming' },
        { company: 'Company 9', price: 900, open: '2023-07-09', close: '2023-07-18', issueSize: '900 Cr', issueType: 'Type I', listingDate: '2023-07-28', status: 'newlisted' }
      ],
      // Add more data for additional pages as needed
    };
    return data[page] || [];
  };

  const tableData = getTableDataForPage(currentPage);

  return (
    <div className="manage-ipo-container">
      <div className="header">
        <h1>Upcoming IPO</h1>
        <button className="register-ipo">Register IPO</button>
      </div>
      <table className="ipo-table">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.company}</td>
              <td>{row.price}</td>
              <td>{row.open}</td>
              <td>{row.close}</td>
              <td>{row.issueSize}</td>
              <td>{row.issueType}</td>
              <td>{row.listingDate}</td>
              <td><button className={`status-button ${row.status}`}>{row.status}</button></td>
              <td><button className='update-btn' onClick={handleUpdate}>Update</button></td>
              <td>
                <i class="fa-regular fa-trash-can trash-icon icons"></i>
                <i className="fa fa-eye eye-icon icons"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          &lt;
        </button>
        <span>Page {currentPage + 1} of {pageData.length}</span>
        <button onClick={handleNextPage} disabled={currentPage === pageData.length - 1}>
          &gt;
        </button>
      </div> */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ManageIPO;
