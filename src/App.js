import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/Message/Message";

const name = "Alex";

function App() {
  const foo = () => {
    alert("Hello!");
  };
  return (
    <div className="App">
      <Message name={name} number={123 + 3} doSmth={foo}/>
    </div>
  );
}

// export class AppClass extends React.Component {
//   render () {
//     return (
//       <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn React
//               </a>
//             </header>
//           </div>
//     )
//   }
// }
export default App;
