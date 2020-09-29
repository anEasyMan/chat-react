import React from "react";
import Button from "@material-ui/core/Button";
import Info from "../info"
import Input from "../input"

class Chat extends React.Component {
  render() {
    return <div className="home">
      <Info />
      <Input />
    </div>;
  }
}

export default Chat;
