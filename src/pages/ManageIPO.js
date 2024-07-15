//new version
import React, { useState } from 'react';
import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';
import './ManageIPO.css';

// Sample data for different pages
const pageData = [
  [
    {
      company: "Company A",
      priceBand: "500",
      open: "2024-07-01",
      close: "2024-07-05",
      issueSize: "130 Cr.",
      issueType: "Type 1",
      listingDate: "2024-07-10",
      status: "Ongoing"
    },
    {
      company: "Company B",
      priceBand: "600",
      open: "2024-07-10",
      close: "2024-07-15",
      issueSize: "150 Cr.",
      issueType: "Type 2",
      listingDate: "2024-07-20",
      status: "Upcoming"
    },
    {
      company: "Company C",
      priceBand: "700",
      open: "2024-07-20",
      close: "2024-07-25",
      issueSize: "170 Cr.",
      issueType: "Type 3",
      listingDate: "2024-07-30",
      status: "New Listed"
    }
  ],
  [
    {
      company: "Company D",
      priceBand: "800",
      open: "2024-08-01",
      close: "2024-08-05",
      issueSize: "200 Cr.",
      issueType: "Type 4",
      listingDate: "2024-08-10",
      status: "Ongoing"
    },
    {
      company: "Company E",
      priceBand: "900",
      open: "2024-08-10",
      close: "2024-08-15",
      issueSize: "250 Cr.",
      issueType: "Type 5",
      listingDate: "2024-08-20",
      status: "Upcoming"
    },
    {
      company: "Company F",
      priceBand: "1000",
      open: "2024-08-20",
      close: "2024-08-25",
      issueSize: "300 Cr.",
      issueType: "Type 6",
      listingDate: "2024-08-30",
      status: "New Listed"
    }
  ],
  // Add more pages if needed
];

const ManageIPO = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < pageData.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleUpdate = () => {
    // Update logic here
  };

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
          {pageData[currentPage].map((row, index) => (
            <TableRow
              key={index}
              company={row.company}
              priceBand={row.priceBand}
              open={row.open}
              close={row.close}
              issueSize={row.issueSize}
              issueType={row.issueType}
              listingDate={row.listingDate}
              status={row.status}
              onUpdate={handleUpdate}
            />
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          &lt; Prev
        </button>
        <span>Page {currentPage + 1} of {pageData.length}</span>
        <button onClick={handleNextPage} disabled={currentPage === pageData.length - 1}>
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ManageIPO;
