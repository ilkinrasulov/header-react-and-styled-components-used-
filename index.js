import React from "react";
import { render } from "react-dom";

import Wrapper from "./Wrapper";
import Title from "./Title";
import Header from "../src/Header";

// Render these styled components like normal react components.
// They will pass on all props and work
// like normal react components – except they're styled!
function App() {
  return <Header />;
}

render(<App />, document.getElementById("root"));
