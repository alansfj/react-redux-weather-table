import React from "react";
import { Link } from "react-router-dom";

export const TableRow = ({ data }) => {
  const { lastreporttime } = data;

  const dateString = lastreporttime.split("T")[0];
  const dateYear = dateString.slice(0, 4);
  const dateMonth = dateString.slice(4, 6);
  const dateDay = dateString.slice(6);

  return (
    <tr>
      <td>
        <Link to={`/${data._id}`}>{data._id}</Link>
      </td>
      <td>{data.cityid}</td>
      <td>{data.name}</td>
      <td>{data.state}</td>
      <td>{data.probabilityofprecip}</td>
      <td>{data.relativehumidity}</td>
      <td>{`${dateYear}/${dateMonth}/${dateDay}`}</td>
      <td>
        {data.probabilityofprecip > 60 || data.relativehumidity > 50
          ? "Sí"
          : "No "}
      </td>
    </tr>
  );
};
