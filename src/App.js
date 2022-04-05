// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Message } from "./components/Message/Message";
// import { Counter } from "./components/Example/Example";
import { useState } from "react";
import { Form } from "./components/Form/Form";
import { useEffect } from "react";
import { MessageList } from "./components/MessageList/MessageList";
import { AUTHORS } from "./utils/constants";

// const human = "me";

function App() {
  //const [messageList, setMessageList] = useState([]);
  const [messages, setMessages] = useState([]);

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage(
      {
        author: AUTHORS.human,
        text, // text: text
      },
      1000 // не работает ?
    );
  };

  useEffect(() => {
    let timeout;
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout = setTimeout(() => {
        addMessage({ author: AUTHORS.robot, text: "hello" });
      });
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages]);

  return (
    <div className="App">
      {/* <Counter randomNumber={rand}/> */}
      {/*{messageList.map((msg) => (
        <Message text={msg.text} author={msg.author} />
      ))} */}
      
      <MessageList messages={messages} />
      <Form onSubmit={sendMessage} />
    </div>
  );
}
// ------------------------
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
