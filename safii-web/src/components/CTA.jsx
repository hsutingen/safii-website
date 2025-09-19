import { Link } from 'react-router-dom';
import './CTA.css';

function CTA() {
  return (
    <section className="cta">
      <div className="cta-background"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            把安心做成日常
            <br />
            <span className="gradient-text">Safe for Every 'I'</span>
          </h2>
          <p className="cta-subtitle">
            在最日常的時刻，也有人即時看見你。
            <br />
            隱私友善的適度追蹤，讓安全不再靠運氣。
          </p>
          
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-large cta-primary">
              聯繫我們
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn-outline btn-large">
              認識團隊
            </Link>
          </div>

          <div className="cta-info">
            <p className="development-note">
              🚧 SAFII 目前正在開發中，敬請期待上線！
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;