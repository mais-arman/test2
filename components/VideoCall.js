import React from 'react';
import photo1 from './images/2.jpeg';
import photo2 from './images/3.jpeg';
import './VideoCall.css';

function VideoCall() {
return (
<div className="content-container ">
    <div className="text-container">
    <h1>Video call</h1>
    <div>
        <i className="fa-solid fa-video"></i>
        <span>
        <b>Meet creators</b>
        <pre>
            In no impression assistance contrasted Manners
            she wishing justice hastily.
        </pre>
        </span>
    </div>
    <div>
        <i className="far fa-thumbs-up"></i>
        <span>
        <b>Support artists</b>
        <pre>
            Handsome met debating sir dwelling age material.
            As style lived he worse dried.
        </pre>
        </span>
    </div>
    </div>

    <div className="img-container">
    <img className=" circular-image" src={photo1} alt="photo1" />
    <img className=" rounded-image" src={photo2} alt="photo2" />
    </div>
</div>
);
}

export default VideoCall;
