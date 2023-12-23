import React from 'react';
import YouTube from 'react-youtube';

type VideoPlayerProps = {
    videoId : string;
}

//const VideoPlayer = ({ videoId }) => {
const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
const opts = {
    height: '390',
    width: '640',
    playerVars: {
        autoplay: 1,
    },
};
    return (
        <YouTube videoId={props.videoId} opts={opts}/>
    );
};
export default VideoPlayer;
