import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Home = React.lazy(() => import("../Home/Home"));
const NewCustomer = React.lazy(() => import("../NewCustomer/NewCustomer"));

function App() {
  return (
    <ErrorBoundary>
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