import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const NewCustomer = React.lazy(() => import("../NewCustomer/NewCustomer"));
const Home = React.lazy(() => import("../Home/Home"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div dangerouslySetInnerHTML={{ __html: <h1>Loading</h1> }}></div>}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/new" component={NewCustomer} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;