import React from "react";
import { Link } from "react-router-dom";

export const TableRow = ({ data }) => {
  return (
    <>
      <tr>
        <td>
          <Link to={`/${data._id}`}>{data._id}</Link>
        </td>
        <td>{data.cityid}</td>
        <td>{data.name}</td>
        <td>{data.state}</td>
        <td>{data.probabilityofprecip}</td>
        <td>{data.relativehumidity}</td>
        <td>{data.lastreporttime}</td>
        <td>
          {data.probabilityofprecip > 60 || data.relativehumidity > 50
            ? "Sí"
            : "No "}
        </td>
      </tr>
    </>
  );
};
