import { useState } from "react";
import Header from "./components/header";
import Hello from "./components/hello";

function App() {
  return (
    <div className="w-96">
      <Header />
      <Hello />
    </div>
  );
}

export default App;
