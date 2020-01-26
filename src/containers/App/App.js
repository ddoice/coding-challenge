import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NewCustomer from "../NewCustomer/NewCustomer"
import Home from "../Home/Home"

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