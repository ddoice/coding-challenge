import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavBar from "../../components/NavBar/NavBar";

const Home = React.lazy(() => import("../Home/Home"));
const NewCustomer = React.lazy(() => import("../NewCustomer/NewCustomer"));

function App() {
  return (
    <ErrorBoundary>
      <NavBar></NavBar>
      <Suspense fallback={<div dangerouslySetInnerHTML={{ __html: <h1>Loading</h1> }}></div>}>
        <Switch>
          <Route path="/new" component={NewCustomer} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;