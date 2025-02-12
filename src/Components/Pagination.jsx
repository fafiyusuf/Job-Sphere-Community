const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const visiblePages = [];
    const maxVisible = 5; // Maximum number of visible page buttons
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
        aria-label="Previous Page"
      >
        Prev
      </button>

      {/* Show first page and ellipsis if needed */}
      {visiblePages[0] > 1 && (
        <>
          <button
            key={1}
            className={`px-3 py-1 border rounded-md ${currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {visiblePages[0] > 2 && <span className="px-3 py-1">...</span>}
        </>
      )}

      {/* Visible Page Buttons */}
      {visiblePages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Show last page and ellipsis if needed */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-3 py-1">...</span>
          )}
          <button
            key={totalPages}
            className={`px-3 py-1 border rounded-md ${currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;