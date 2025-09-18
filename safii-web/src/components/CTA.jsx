import { Link } from 'react-router-dom';
import './CTA.css';

function CTA() {
  return (
    <section className="cta">
      <div className="cta-background"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            立即下載 SAFII
            <br />
            <span className="gradient-text">守護你的安全</span>
          </h2>
          <p className="cta-subtitle">
            加入 50,000+ 位女性用戶，體驗全方位的智慧安全守護。
            <br />
            免費下載，讓科技成為你最可靠的安全夥伴。
          </p>
          
          <div className="cta-actions">
            <Link to="/download" className="btn btn-primary btn-large cta-primary">
              免費下載 APP
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2l6 6h-4v8H8v-8H4l6-6z"/>
              </svg>
            </Link>
            <Link to="/features" className="btn btn-outline btn-large">
              了解更多功能
            </Link>
          </div>

          <div className="cta-badges">
            <div className="badge app-store">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <span className="badge-line1">Download on the</span>
                <span className="badge-line2">App Store</span>
              </div>
            </div>
            
            <div className="badge google-play">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div>
                <span className="badge-line1">GET IT ON</span>
                <span className="badge-line2">Google Play</span>
              </div>
            </div>
          </div>

          <div className="cta-stats">
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <div className="stars">
                {[1, 2, 3, 4, 5].map(star => (
                  <svg key={star} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1l1.5 3h3.5l-2.5 2 1 3.5L8 7.5 5.5 9.5l1-3.5L4 4h3.5L8 1z"/>
                  </svg>
                ))}
              </div>
              <span className="stat-label">用戶評分</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">下載次數</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">守護服務</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;