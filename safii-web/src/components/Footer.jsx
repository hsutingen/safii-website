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
            <p className="footer-slogan">Safe for Every 'I' — Individually, Intuitively, Invisibly</p>
            <p className="footer-description">
              為女性量身設計的隱私友善型安全守護系統，兼具科技的理性與情感的溫度。
            </p>
          </div>

          <div className="footer-section">
            <h4>產品</h4>
            <ul className="footer-links">
              <li><Link to="/features">功能介紹</Link></li>
              <li><Link to="/about">關於我們</Link></li>
              <li><Link to="/privacy">隱私安全</Link></li>
              <li><Link to="/faq">常見問答</Link></li>
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
            <h4>追蹤我們</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/share/16SaPwpMze/?mibextid=wwXIfr" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/safii.app?igsh=b3R0c2gzazZpOHp1&utm_source=qr" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 4.928.147 3.35 1.209 2.295 2.295 1.209 3.35.147 4.928.048 7.041.013 7.989 0 8.396 0 12.017c0 3.624.013 4.09.048 5.014.099 2.115 1.162 3.693 2.295 4.707 1.055 1.086 2.592 2.148 4.707 2.247.951.035 1.358.048 4.979.048 3.624 0 4.09-.013 5.014-.048 2.115-.099 3.693-1.162 4.707-2.247 1.086-1.055 2.148-2.592 2.247-4.707.035-.951.048-1.358.048-4.979 0-3.624-.013-4.09-.048-5.014-.099-2.115-1.162-3.693-2.247-4.707C20.693 1.162 19.115.099 17 .048 16.089.013 15.682 0 12.017 0zm0 2.158c3.556 0 3.975.013 5.378.048 1.299.059 2.006.276 2.476.458.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.182.47.399 1.177.458 2.476.035 1.403.048 1.822.048 5.378s-.013 3.975-.048 5.378c-.059 1.299-.276 2.006-.458 2.476-.242.622-.532 1.066-.998 1.532-.466.466-.91.756-1.532.998-.47.182-1.177.399-2.476.458-1.403.035-1.822.048-5.378.048s-3.975-.013-5.378-.048c-1.299-.059-2.006-.276-2.476-.458-.622-.242-1.066-.532-1.532-.998-.466-.466-.756-.91-.998-1.532-.182-.47-.399-1.177-.458-2.476-.035-1.403-.048-1.822-.048-5.378s.013-3.975.048-5.378c.059-1.299.276-2.006.458-2.476.242-.622.532-1.066.998-1.532.466-.466.91-.756 1.532-.998.47-.182 1.177-.399 2.476-.458 1.403-.035 1.822-.048 5.378-.048z"/>
                  <path d="m12.017 15.33c-1.83 0-3.313-1.483-3.313-3.313s1.483-3.313 3.313-3.313 3.313 1.483 3.313 3.313-1.483 3.313-3.313 3.313zm0-8.486c-2.86 0-5.173 2.313-5.173 5.173s2.313 5.173 5.173 5.173 5.173-2.313 5.173-5.173-2.313-5.173-5.173-5.173z"/>
                  <circle cx="17.158" cy="6.842" r="1.209"/>
                </svg>
              </a>
            </div>
            <p className="social-description">
              關注我們的社群媒體，獲取最新開發動態
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 SAFII. All rights reserved.</p>
          </div>
          <div className="footer-contact">
            <span>safiihsu@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;