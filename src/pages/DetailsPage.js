import React from "react";
import { useHistory } from "react-router-dom";

import { Details } from "../components/Details";
import { Spinner } from "../components/Spinner";

import { selectApiData, selectApiIsFetching } from "../redux/api/api.selectors";
import { useSelector } from "react-redux";
import { GoBackButton } from "../components/GoBackButton";

export const DetailsPage = () => {
  const history = useHistory();
  const apiData = useSelector(selectApiData);
  const isFetching = useSelector(selectApiIsFetching);

  const detailsPageData = apiData.filter(
    result => `/${result._id}` === history.location.pathname
  );

  return (
    <div>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="card details-card">
            {detailsPageData.length === 0 ? (
              <div>No se encontró información</div>
            ) : (
              <Details detailsPageData={detailsPageData} />
            )}

            <GoBackButton />
          </div>
        </div>
      )}
    </div>
  );
};
