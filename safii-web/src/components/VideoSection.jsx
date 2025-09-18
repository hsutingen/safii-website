import { useState } from 'react';
import './VideoSection.css';

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="video-section">
      <div className="container">
        <div className="video-content">
          <h2 className="section-title">認識 SAFII</h2>
          <p className="section-subtitle">
            看 1 分鐘，了解 SAFII 如何守護你
          </p>
          
          <div className="video-container">
            {!isPlaying ? (
              <div className="video-thumbnail" onClick={handlePlay}>
                <div className="video-overlay">
                  <button className="play-button" aria-label="播放影片">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)"/>
                      <path d="M24 20L40 30L24 40V20Z" fill="var(--primary-pink-start)"/>
                    </svg>
                  </button>
                </div>
                <img 
                  src="https://img.youtube.com/vi/tkltyuwdBug/maxresdefault.jpg" 
                  alt="SAFII 介紹影片縮圖"
                  className="thumbnail-image"
                />
              </div>
            ) : (
              <div className="video-iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/tkltyuwdBug?autoplay=1"
                  title="SAFII 介紹影片"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          
          <div className="video-info">
            <span className="video-duration">影片長度 1:02</span>
            <span className="video-platform">YouTube</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;