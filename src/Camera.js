import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';
import './App.css'

function Camera() {
    const videoRef = useRef(null);

    useEffect(() => {
        const player = videojs(videoRef.current, {
            controls: true,
            autoplay: true,
            sources: [{
                src: 'http://50.197.223.170/#view',
                type: 'video/mp4'
            }]
        });

        return () => {
            player.dispose();
        }
    }, []);

    return (
        <div>
            <video ref={videoRef} className="video-js" />
        </div>
    );
}

export default Camera