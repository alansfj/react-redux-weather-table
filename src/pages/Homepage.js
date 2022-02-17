import React from "react";
import { useSelector } from "react-redux";

import { selectApiIsFetching } from "../redux/api/api.selectors";

import { Table } from "../components/Table";
import { PaginationButtons } from "../components/PaginationButtons";
import { PaginationCount } from "../components/PaginationCount";
import { Spinner } from "../components/Spinner";

export const Homepage = () => {
  const isFetching = useSelector(selectApiIsFetching);

  return (
    <div className="container-xxl card">
      <div className="row">
        {isFetching ? (
          <Spinner></Spinner>
        ) : (
          <>
            <Table></Table>
            <PaginationCount></PaginationCount>
            <PaginationButtons></PaginationButtons>
          </>
        )}
      </div>
    </div>
  );
};
