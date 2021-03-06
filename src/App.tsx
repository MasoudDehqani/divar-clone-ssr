import React from "react";
import DivarContextProvider from "./components/context/DivarContextProvider";
import Divar from "./components/Divar/Divar";

function App() {
  return (
    <DivarContextProvider>
      <Divar />
    </DivarContextProvider>
  );
}

export default App;
