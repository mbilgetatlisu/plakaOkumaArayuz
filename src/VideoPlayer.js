import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

class VideoPlayer extends React.Component {
    componentDidMount() {
        // instantiate video.js
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
    }

    componentWillUnmount() {
        // destroy player on unmount
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        // use ref to store a reference to the video node
        return (
            <div>
                <div data-vjs-player>
                    <video ref={(node) => (this.videoNode = node)} className="video-js" />
                </div>
            </div>
        );
    }
}

export default VideoPlayer;
