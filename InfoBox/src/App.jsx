import { useState } from "react";
import DropDownComp from "./components/DropdownComp/DropDownComp";
import InfoBox from "./components/InfoBoxComp/InfoBoxComp";
import peopleData from "../src/components/DropdownComp/peopleData.json";

import "./App.css";

function App() {
  return (
    <section class="app">
      <DropDownComp />
    </section>
  );
}

export default App;
