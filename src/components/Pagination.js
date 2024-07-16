import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    pages.push(
      <button
        key={1}
        className={`page-number ${currentPage === 1 ? 'active' : ''}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    if (currentPage > 4) {
      pages.push(<span key="dots1" className="dots">...</span>);
    }

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 3) {
      pages.push(<span key="dots2" className="dots">...</span>);
    }

    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          className={`page-number ${currentPage === totalPages ? 'active' : ''}`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="prev-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        className="next-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
