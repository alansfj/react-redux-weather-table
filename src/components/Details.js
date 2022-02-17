import React from "react";

export const Details = ({ detailsPageData }) => {
  let dateHours, dateMinutes, dateSeconds, dateYear, dateMonth, dateDay;

  if (detailsPageData.length !== 0) {
    const { lastreporttime } = detailsPageData[0];
    const dateString1 = lastreporttime.split("T")[0];
    const dateString2 = lastreporttime.split("T")[1];

    dateYear = dateString1.slice(0, 4);
    dateMonth = dateString1.slice(4, 6);
    dateDay = dateString1.slice(6);

    dateHours = dateString2.slice(0, 2);
    dateMinutes = dateString2.slice(2, 4);
    dateSeconds = dateString2.slice(4, 6);
  }

  return (
    <div>
      {detailsPageData[0] && (
        <div>
          <h4 className="details-title">
            {detailsPageData[0].name}, {detailsPageData[0].state}
          </h4>

          <div>
            <strong>Día de medición:</strong>{" "}
            {`${dateYear}/${dateMonth}/${dateDay}`}
          </div>
          <div>
            <strong>Hora de medición:</strong>{" "}
            {`${dateHours}:${dateMinutes}:${dateSeconds}`}
          </div>
          <div>
            <strong>Temperatura:</strong> {detailsPageData[0].tempc} °C
          </div>
          <div>
            <strong>Humedad relativa:</strong>{" "}
            {detailsPageData[0].relativehumidity}
          </div>
          <div>
            <strong>Probabilidad de precipitación:</strong>{" "}
            {detailsPageData[0].probabilityofprecip}
          </div>
          <div>
            <strong>Velocidad del viento:</strong>{" "}
            {detailsPageData[0].windspeedkm} Km
          </div>
          <div>
            <strong>Descripción:</strong>{" "}
            {detailsPageData[0].skydescriptionlong}
          </div>
        </div>
      )}
    </div>
  );
};
