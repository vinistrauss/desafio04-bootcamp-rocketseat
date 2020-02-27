import React, { Component } from "react";

import Header from "../header/index";
import Post from "../post/index";

class MainComponent extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Post></Post>
      </>
    );
  }
}

export default MainComponent;
