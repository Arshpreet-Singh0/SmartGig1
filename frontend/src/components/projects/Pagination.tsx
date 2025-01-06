
const Pagination = ({ totalResults, resultsPerPage, currentPage, setCurrentPage }:any) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5;
    return new Array(5).fill(0).map((_, idx) => start + idx + 1);
  };

  const changePage = (page:number) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    setCurrentPage((page:number) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page:number) => page - 1);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * resultsPerPage - resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return `Showing ${startIndex + 1} to ${Math.min(endIndex, totalResults)} of ${totalResults} results`;
  };

  return (
    <div className="flex items-center justify-center space-x-2 h-20 bg-black-200 text-white">
      <button
        className="px-4 py-2 border rounded-md hover:bg-gray-200"
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {getPaginationGroup().map((item, index) => (
        item <= totalPages && (
          <button
            key={index}
            className={`px-4 py-2 border rounded-md ${item === currentPage ? 'bg-[#2463EB] text-white' : 'hover:bg-gray-200'}`}
            onClick={() => changePage(item)}
          >
            {item}
          </button>
        )
      ))}

      <button
        className="px-4 py-2 border rounded-md hover:bg-gray-200"
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

      <div>
        {getPaginatedData()}
      </div>
    </div>
  );
};

export default Pagination;
