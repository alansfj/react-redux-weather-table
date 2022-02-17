import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { DetailsPage } from "./pages/DetailsPage";

import { Homepage } from "./pages/Homepage";

import { useDispatch } from "react-redux";

import { fetchData } from "./redux/api/apiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/:id" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
