import React, { useState } from "react";
// import UseStateHook from "./components/useStateHook";
// import UseEffectHook from "./components/useEffectHook";
// import UseRefHook from "./components/useRefHook";
// import UseCallBackHook from "./components/useCallBackHook";
// import UseContextHook from "./components/useContextHook";
// import UseReducerHook from "./components/useReducerHook";
// import ReactLifeCycle from "./components/reactLifeCycle";
import ErrorBoundry from "./components/errorBoudry";
const App = () => {
  const [counter, setcounter] = useState(0);
  const [hide, setHide] = useState(false);
  return (
    <div>
      <h1>React Hooks</h1>
      <hr />
      <ErrorBoundry />
      {/* <div>
        {!hide && <ReactLifeCycle />}
        <button onClick={() => setHide(!hide)}>toggle</button>
      </div> */}
      {/* <UseStateHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseCallBackHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseReducerHook /> */}
      {/* <button onClick={() => setcounter((prev) => prev + 1)}>
        {counter} + Counter
      </button> */}
    </div>
  );
};

export default App;
