import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { TransactionContextProvider } from "./context/GlobalContext"
import { TransactionDetails } from "./components/Transaction/";
// import './App.css';

function App() {
  return (
    <TransactionContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={TransactionDetails} />
        </Switch>
      </Router>
    </TransactionContextProvider>
  );
}

export default App;
