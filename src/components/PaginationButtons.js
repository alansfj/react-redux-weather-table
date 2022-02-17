import React from "react";

import { increment, decrement } from "../redux/pagination/paginationSlice";

import { useDispatch, useSelector } from "react-redux";

import { selectCurrentPage } from "../redux/pagination/pagination.selectors";

export const PaginationButtons = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {currentPage !== 1 && (
        <button
          style={{ margin: "0 0.5rem" }}
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
          style={{ margin: "0 0.5rem" }}
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
