import React from 'react'

const VideoDisplay = ({url}) => {
  return (
    <>
      <iframe
        width="919"
        height="525"
        src={url}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </>
  );
};

export default VideoDisplay