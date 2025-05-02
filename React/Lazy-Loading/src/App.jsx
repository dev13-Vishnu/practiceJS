// App.js

import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";
const UserProfile =  lazy(() => import('./UserProfile'));


function App() {
  return (
    <div>
      <h1> Welcome to React Lazy Loading!</h1>
      <Suspense fallback = {<div>Loading User Profile...</div>}>
        <UserProfile/>
      </Suspense>
      <h1>React Error Boundary Example</h1>
      <ErrorBoundary>
        <BuggyComponent/>
      </ErrorBoundary>
    </div>    
  );
}

export default App;
