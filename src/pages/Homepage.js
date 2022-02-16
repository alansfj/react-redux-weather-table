import React, { useEffect } from "react";
import { Table } from "../components/Table";

// import { useDispatch } from "react-redux";
// import {
//   selectData,
//   selectIsFetching,
// } from "../redux/fetchedData/fetchedData.selectors";

// import { fetchData } from "../redux/api/apiSlice";

import { selectApiIsFetching } from "../redux/api/api.selectors";

import { useSelector } from "react-redux";
import { PaginationButtons } from "../components/PaginationButtons";

export const Homepage = () => {
  const isFetching = useSelector(selectApiIsFetching);

  return (
    <div>
      Homepage
      {isFetching ? "Cargando..." : <Table></Table>}
      <PaginationButtons></PaginationButtons>
    </div>
  );
};
