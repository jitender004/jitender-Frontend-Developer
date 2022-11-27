import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <footer>
      <ul className="flex justify-center items-center mt-4 gap-2">
        <li className="page-item">
          <button
            className="p-5 text-lg bg-zinc-200 text-emerald-800"
            onClick={prevPage}
            href="#"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className="p-5 text-lg bg-zinc-200 text-emerald-800 rounded-2xl border-orange-400 bg-green-600  text-slate-100"
              href="#"
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="">
          <button
            className="p-5 text-lg bg-zinc-200 text-emerald-800"
            onClick={nextPage}
            href="#"
          >
            Next
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Pagination;
