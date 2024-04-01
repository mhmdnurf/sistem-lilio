interface Pagination {
  pageNumbers: number[];
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export default function Pagination({
  pageNumbers,
  currentPage,
  setCurrentPage,
}: Pagination) {
  return (
    <>
      <div className="flex justify-end space-x-2 mx-8 shadow-md border-x-4 bg-gray-100 border-b-4 rounded-b-xl border-t p-2 drop-shadow-sm">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`px-4 py-2 rounded text-xs font-bold ${
              currentPage === number ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="mb-10" />
    </>
  );
}
