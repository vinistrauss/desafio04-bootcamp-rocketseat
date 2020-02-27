import React from "react";

import CommentComponent from "../comment/index";
import "./styles.css";

function FeedComponent({ id, author, date, content, comments }) {
  return (
    <li className="feed" key={id}>
      <div className="contentFeed">
        <div className="titleProfile">
          <img src={author.avatar} alt="image profile" />
          <div className="infoProfile">
            <span> {author.name} </span>
            <span> {date} </span>
          </div>
        </div>
      </div>
      <div className="post">
        <p>{content}</p>
      </div>
      <ul>{<CommentComponent commments={comments}></CommentComponent>}</ul>
    </li>
  );
}

export default FeedComponent;
