export const Message = ({ name, number }) => {
  return (
    <h3>
      I am a message: {name}, {number}
    </h3>
  );
};

// import React from "react";

// export class Message extends React.Component {
//   render() {
//       const { name, number, doSmth } = this.props;
//     return (
//       <h3 onClick={doSmth}>
//         I am a message: {name}, {number}
//       </h3>
//     );
//   }
// }
