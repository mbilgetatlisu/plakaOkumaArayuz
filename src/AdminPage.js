import React from 'react';
// import Camera from "./Camera";
import VideoPlayer from "./VideoPlayer";


const AdminPage = (prop) => {
    return (
        <div>
            Admin
            {/*<Camera/>*/}
            <VideoPlayer src="http://50.197.223.170:80/mjpg/video.mjpg"/>
        </div>

    );
};

export default AdminPage;