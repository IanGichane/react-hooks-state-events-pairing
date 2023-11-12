import React from 'react'

const CommentSection = ({ commentDetails }) => {
  return (
    <>
      <hr />
      <h2>2 comments</h2>
      {commentDetails.map((comments) => (
        <div key={comments.id}>
          <h3 key={comments.id}> {comments.user}</h3>
          <p key={comments.id}>{comments.comment}</p>
        </div>
      ))}
    </>
  );
};

export default CommentSection