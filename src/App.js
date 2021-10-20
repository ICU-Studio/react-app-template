import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Bootstrap
import { Container } from "react-bootstrap";

import Main from "./components/Main";

const App = () =>{
  return (
    <Container style={{minHeight: "100vh"}}>
      <div className="w-100">
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Main} />
          </Suspense>
        </Router>
      </div>
    </Container>
  );
}

export default App;
