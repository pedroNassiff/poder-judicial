import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" componentes={Home} />
        <Route exact path="/login" componentes={Login} />
        <Route exact path="/nueva-cuenta" componentes={NuevaCuenta} />
        <Route exact path="/institucional" componentes={institucional} />
        
      </Switch>
    </Router>
  );
}

export default App;
