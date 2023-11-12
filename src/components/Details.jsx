import React,{useState} from "react";
import CommentSection from "./CommentSection.jsx";

const Details = ({ videoDetails }) => {
    const [isHidden, setIsHidden] = useState(true)

    const [likes, setLikes] = useState(videoDetails.upVotes);
    const [dislikes, setdisLikes] = useState(videoDetails.downVotes);

    
    
    function showComments() {
        setIsHidden(!isHidden)
       
    }
    function addLikes() {
        setLikes(prev=>prev+1)
     
    }

        function addDisLikes() {
          setdisLikes((prev) => prev + 1);
        }
  return (
    <>
      <h3>React Today and Tomorrow and 90% Cleaner react with hooks</h3>
      <p>
        views {videoDetails.views} | Uploaded {videoDetails.dateOfUpload}
      </p>
      <button onClick={addLikes}>{likes}</button>
      <button onClick={addDisLikes}>{dislikes}</button>
      <div>
        <button onClick={() => showComments()}>
          {isHidden ? "Show" : "Hide"} comments
        </button>
      </div>
      {!isHidden && <CommentSection commentDetails={videoDetails.comments} />}
    </>
  );
};

export default Details;
