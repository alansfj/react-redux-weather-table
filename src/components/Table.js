import React from "react";
import { useSelector } from "react-redux";

import { selectApiData } from "../redux/api/api.selectors";
import { selectCurrentPage } from "../redux/pagination/pagination.selectors";

import { TableRow } from "./TableRow";

const numberOfRows = 10;

export const Table = () => {
  const dataArray = useSelector(selectApiData);

  const page = useSelector(selectCurrentPage);

  const rowsPerPageArray = dataArray.slice(
    page * numberOfRows - numberOfRows,
    page * numberOfRows
  );

  return (
    <div className="table-container">
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
