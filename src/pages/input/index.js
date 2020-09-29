import React from "react";

import {Input} from 'antd';
const { TextArea } = Input;

class UserInput extends React.Component {
  render() {
    return (
        <TextArea rows={4} bordered={false} />
    );
  }
}

export default UserInput;
