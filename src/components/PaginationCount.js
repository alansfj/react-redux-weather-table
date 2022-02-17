import React from "react";

import { useSelector } from "react-redux";

import { selectCurrentPage } from "../redux/pagination/pagination.selectors";

export const PaginationCount = () => {
  const currentPage = useSelector(selectCurrentPage);

  return (
    <div className="pagination-count">
      <span class="badge rounded-pill bg-primary">{currentPage}/10</span>
    </div>
  );
};
