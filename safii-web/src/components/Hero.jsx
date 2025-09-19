import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="english-tagline">Safe for Every 'I'</span><br />
              <span className="subtitle-text">Individually, Intuitively, Invisibly</span>
            </h1>
            <p className="hero-subtitle">
              在最日常的時刻，也有人即時看見你。一鍵視訊互助、適度追蹤、安全路徑、AI 假電話與一鍵通報，把安心做成日常。
            </p>
            <p className="hero-description">
              為女性量身設計的隱私友善型安全守護系統，兼具科技的理性與情感的溫度。
            </p>
            <div className="hero-actions">
              <Link to="/about" className="btn btn-primary btn-large">
                認識我們
              </Link>
              <Link to="/features" className="btn btn-outline btn-large">
                了解功能
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">適度</span>
                <span className="stat-label">追蹤守護</span>
              </div>
              <div className="stat">
                <span className="stat-number">隱私</span>
                <span className="stat-label">優先保護</span>
              </div>
              <div className="stat">
                <span className="stat-number">即時</span>
                <span className="stat-label">互助支援</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="status-bar"></div>
                  <div className="app-header">
                    <div className="profile-section">
                      <div className="profile-pic"></div>
                      <div className="greeting">
                        <span>晚安，小雅</span>
                        <span className="status safe">目前安全</span>
                      </div>
                    </div>
                  </div>
                  <div className="quick-actions">
                    <div className="action-btn emergency">
                      <div className="btn-icon"></div>
                      <span>緊急求助</span>
                    </div>
                    <div className="action-btn fake-call">
                      <div className="btn-icon"></div>
                      <span>假電話</span>
                    </div>
                    <div className="action-btn route">
                      <div className="btn-icon"></div>
                      <span>安全路線</span>
                    </div>
                  </div>
                  <div className="map-preview">
                    <div className="location-dot"></div>
                    <div className="safe-zone"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-card card-1">
                <span className="icon">🔒</span>
                <span>即時守護</span>
              </div>
              <div className="floating-card card-2">
                <span className="icon">👥</span>
                <span>互助網絡</span>
              </div>
              <div className="floating-card card-3">
                <span className="icon">🗺️</span>
                <span>智慧路線</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;