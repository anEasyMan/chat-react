/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from "react";
// import Pageone from "../page_one";
// import PageTwo from '../page_two'
import Chat from '../chat'
export default class main extends Component {
  render() {
    return (
      <div className='all'>
        {/* <Pageone/>
            <PageTwo/> */}
        <Chat />
      </div>
    );
  }
}
