'use client';

import React, { useState } from 'react'
import "./Banner.css"

export default function Video() {
    const [loaded, setLoaded] = useState(false);

    return <>
        {/* <video src={backgrounfVideo} autoPlay loop muted /> */}
        <div className="video-container">
            {!loaded && <img src="/video/Screenshot (24).png" alt="Preview" className="video-placeholder" />}
            <video
                className={`video-bg ${loaded ? "visible" : "hidden"}`}
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={() => setLoaded(true)}
            >
                <source src="https://res.cloudinary.com/di0a0utla/video/upload/f_auto:video,q_auto/v1/nsl/kqzw6r4fe3qk18jdijud" type="video/mp4" />
            </video>
        </div>
    </>
}
