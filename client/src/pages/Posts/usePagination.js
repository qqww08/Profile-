import React, { useState } from "react";

function usePagination(List, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(List.length / itemsPerPage);

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    return List.slice(begin, end);
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
