import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <h3>SAFII</h3>
            </Link>
            <p className="footer-slogan">Safe for Every 'I' Individually</p>
            <p className="footer-description">
              守護每一個獨立的妳，透過科技與社群的力量，創造更安全的環境。
            </p>
          </div>

          <div className="footer-section">
            <h4>產品</h4>
            <ul className="footer-links">
              <li><Link to="/features">功能介紹</Link></li>
              <li><Link to="/download">立即下載</Link></li>
              <li><a href="#privacy">隱私政策</a></li>
              <li><a href="#terms">服務條款</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>公司</h4>
            <ul className="footer-links">
              <li><Link to="/about">關於我們</Link></li>
              <li><Link to="/contact">聯繫我們</Link></li>
              <li><a href="#careers">加入我們</a></li>
              <li><a href="#press">媒體資源</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>社群</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 4.928.147 3.35 1.209 2.295 2.295 1.209 3.35.147 4.928.048 7.041.013 7.989 0 8.396 0 12.017c0 3.624.013 4.09.048 5.014.099 2.115 1.162 3.693 2.295 4.707 1.055 1.086 2.592 2.148 4.707 2.247.951.035 1.358.048 4.979.048 3.624 0 4.09-.013 5.014-.048 2.115-.099 3.693-1.162 4.707-2.247 1.086-1.055 2.148-2.592 2.247-4.707.035-.951.048-1.358.048-4.979 0-3.624-.013-4.09-.048-5.014-.099-2.115-1.162-3.693-2.247-4.707C20.693 1.162 19.115.099 17 .048 16.089.013 15.682 0 12.017 0zm0 2.158c3.556 0 3.975.013 5.378.048 1.299.059 2.006.276 2.476.458.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.182.47.399 1.177.458 2.476.035 1.403.048 1.822.048 5.378s-.013 3.975-.048 5.378c-.059 1.299-.276 2.006-.458 2.476-.242.622-.532 1.066-.998 1.532-.466.466-.91.756-1.532.998-.47.182-1.177.399-2.476.458-1.403.035-1.822.048-5.378.048s-3.975-.013-5.378-.048c-1.299-.059-2.006-.276-2.476-.458-.622-.242-1.066-.532-1.532-.998-.466-.466-.756-.91-.998-1.532-.182-.47-.399-1.177-.458-2.476-.035-1.403-.048-1.822-.048-5.378s.013-3.975.048-5.378c.059-1.299.276-2.006.458-2.476.242-.622.532-1.066.998-1.532.466-.466.91-.756 1.532-.998.47-.182 1.177-.399 2.476-.458 1.403-.035 1.822-.048 5.378-.048z"/>
                  <path d="m12.017 15.33c-1.83 0-3.313-1.483-3.313-3.313s1.483-3.313 3.313-3.313 3.313 1.483 3.313 3.313-1.483 3.313-3.313 3.313zm0-8.486c-2.86 0-5.173 2.313-5.173 5.173s2.313 5.173 5.173 5.173 5.173-2.313 5.173-5.173-2.313-5.173-5.173-5.173z"/>
                  <circle cx="17.158" cy="6.842" r="1.209"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 SAFII. All rights reserved.</p>
          </div>
          <div className="footer-download-links">
            <a href="#" className="download-link">App Store</a>
            <a href="#" className="download-link">Google Play</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;