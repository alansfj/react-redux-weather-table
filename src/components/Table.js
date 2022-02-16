import React, { useEffect } from "react";

import { TableRow } from "./TableRow";

import { selectApiData } from "../redux/api/api.selectors";
// import { selectApiIsFetching } from "../redux/api/api.selectors";

import { selectCurrentPage } from "../redux/pagination/pagination.selectors";

import { useSelector } from "react-redux";

export const Table = () => {
  const dataArray = useSelector(selectApiData);
  console.log(dataArray);

  const page = useSelector(selectCurrentPage);
  console.log("page:", page);

  // const isFetching = useSelector(selectApiIsFetching)

  const rowsPerPageArray = dataArray.slice(page * 10 - 10, page * 10);

  console.log(rowsPerPageArray);

  // let rowsPerPageArray;

  // let rowsPerPageArray;

  // useEffect(() => {
  //   rowsPerPageArray = dataArray.slice(page * 10 - 10, page * 10);
  //   console.log(rowsPerPageArray);
  // }, [page]);

  return (
    <div>
      Table
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ciudad ID</th>
            <th>Ciudad</th>
            <th>Estado</th>
            <th>Prob. de Precipitación</th>
            <th>Humedad Rel.</th>
            <th>last report yyyy/mm/dd</th>
            <th>Lloverá?</th>
          </tr>
        </thead>
        <tbody>
          {rowsPerPageArray.map(individualData => (
            <TableRow key={individualData._id} data={individualData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
