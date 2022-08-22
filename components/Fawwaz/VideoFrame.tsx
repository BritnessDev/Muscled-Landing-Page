import React, { FC } from "react";

import { VideoFrameProps } from "./component.type"

const VideoFrame: FC<VideoFrameProps> = ({ className, allowFullScreen, sourceURL, ...props }) => {
	return (
		<iframe
            className={`${className ? className : "w-[560px] h-[315px]"}`}
			src={ sourceURL ? sourceURL : "https://www.youtube.com/embed/D0UnqGm_miA"}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen={allowFullScreen}
            {...props}></iframe>
	);
};

export default VideoFrame;
