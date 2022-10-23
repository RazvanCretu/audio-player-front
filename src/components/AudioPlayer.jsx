import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import AudioHero from "./AudioHero"
import Thumbnail from "./Thumbnail";
import "../styles/AudioPlayer.css";
import { ReactComponent as Waves } from "../static/waves.svg";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
 */

const AudioPlayer = ({ tracks }) => {
  // State 
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const {
    attributes: {
      source: {
        data: {
          attributes: { url: audioSrc, name },
        },
      },
      artist,
      thumbnail: {
        data: {
          attributes: { url: imageSrc }
        }
      }
    },
  } = tracks[trackIndex];

  
  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;
  
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [500]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

// Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    // console.log(isReady.current,trackIndex)
    
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);
    
    if (isReady.current) {
      audioRef.current.play().then().catch((err) => {
        console.log(err)
      });
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Added to stop autoplaying
    audioRef.current.pause()
    setIsPlaying(false)

    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div id="audio" className="audio-container">
      <img
        src="https://m.cdn.sera.to/v3/homepage/background/home-hero-ls-3-md.jpg"
        className="image"
        alt="Background"
      />
      <div className="overlay"></div>
      <div className="audio-player" >
        <Thumbnail src={imageSrc}/>
        <AudioHero name={name} artist={artist} />
        <AudioControls
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        <div className="track-list">
          <ul>
            {tracks && tracks.map((i,index,arr) => {
              const {
                attributes: {
                  source: {
                    data: {
                      attributes: { url: audioSrc, name },
                    },
                  }
                },
              } = i;

              return (
                <li key={index}>
                  <h3 onClick={(e) => {setTrackIndex(index)}} className={index === trackIndex ? "active" : ""}>
                    {name.replace('.mp3','')}
                  </h3>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="wave-divider">
        <Waves />
      </div>
    </div>
  );
};

export default AudioPlayer;
