import video from "../data/video.js";
import Details from "./Details.jsx";
import VideoDisplay from "./VideoDisplay.jsx";

function App() {


  return (
    <div className="App">
      <VideoDisplay url={video.embedUrl} />
      <Details
        videoDetails={video}
      />
   
    </div>
  );
}

export default App;
