import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const [count, setCount] = useState(0);

   const privacy = useSelector(store => store.privacy)

  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <Header/>
        <div class="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage/> :  <DisplayCounter/>}
          <Controls/>
        </div>
      </div>
    </div>
  );
}

export default App;
