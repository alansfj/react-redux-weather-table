import React from "react";

import { increment, decrement } from "../redux/pagination/paginationSlice";

import { useDispatch, useSelector } from "react-redux";

import { selectCurrentPage } from "../redux/pagination/pagination.selectors";

export const PaginationButtons = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  return (
    <div>
      {currentPage !== 1 && (
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Atrás
        </button>
      )}

      {currentPage !== 10 && (
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Adelante
        </button>
      )}
    </div>
  );
};
