import React from "react";

import "./styles.css";

function CommentComponent({ commments }) {
  return (
    <>
      {commments.map(comment => (
        <li className="posts" key={comment.id}>
          <div className="image">
            <img src={comment.author.avatar} alt="comment profile image" />
          </div>
          <div className="comment">
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        </li>
      ))}
    </>
  );
}

export default CommentComponent;
