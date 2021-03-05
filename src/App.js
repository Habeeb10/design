import React from "react";
import Header from "./component/header/header";
import Cont from "./component/content/cont";
import Last from "./component/last/last";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Cont />
      <Last />
    </div>
  );
}

export default App;
