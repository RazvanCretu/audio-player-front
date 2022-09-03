import React from "react";
import { BsPlayCircle, BsPauseCircle, BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import "./AudioControls.css";

const AudioControls = ({
  isPlaying,
  setIsPlaying,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="audio-controls">
      <button className="prevBtn" type="button" aria-label="Previous" onClick={onPrevClick}>
        <BsArrowLeftCircle />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pauseBtn"
          onClick={() => setIsPlaying(false)}
          aria-label="Pause"
        >
          <BsPauseCircle />
        </button>
      ) : (
        <button
          type="button"
          className="playBtn"
          onClick={(e) => {
            e.preventDefault()
            setIsPlaying(true)}}
          aria-label="Play"
        >
          <BsPlayCircle />
        </button>
      )}
      <button className="nextBtn" type="button" aria-label="Next" onClick={onNextClick}>
        <BsArrowRightCircle />
      </button>
    </div>
  );
};

export default AudioControls;
