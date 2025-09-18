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
              守護每一個<br />
              <span className="gradient-text">獨立的妳</span>
            </h1>
            <p className="hero-subtitle">
              SAFII 透過智慧科技與女性互助網絡，為妳提供全方位的安全守護。
              無論何時何地，讓妳都能自信前行。
            </p>
            <div className="hero-actions">
              <Link to="/download" className="btn btn-primary btn-large">
                立即下載 APP
              </Link>
              <Link to="/features" className="btn btn-outline btn-large">
                了解更多
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50K+</span>
                <span className="stat-label">活躍用戶</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">安全事件處理</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">全天候守護</span>
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