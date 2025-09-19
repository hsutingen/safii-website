import { Link } from 'react-router-dom';
import './Download.css';

function Download() {
  const developmentProgress = [
    {
      icon: '⏱️',
      title: '適度追蹤',
      description: '核心功能開發中',
      status: 'in-progress'
    },
    {
      icon: '🗺️',
      title: '安全路徑',
      description: '路線分析系統',
      status: 'in-progress'
    },
    {
      icon: '📞',
      title: 'AI 假電話',
      description: 'AI 對話生成',
      status: 'planning'
    },
    {
      icon: '🚨',
      title: '一鍵通報',
      description: '緊急通報系統',
      status: 'planning'
    },
    {
      icon: '👥',
      title: '女性互助',
      description: '視訊陪走功能',
      status: 'planning'
    },
    {
      icon: '🔒',
      title: '隱私保護',
      description: '端到端加密',
      status: 'in-progress'
    }
  ];


  return (
    <div className="download-page">
      <div className="download-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="page-title">SAFII 開發進度</h1>
              <p className="page-subtitle">
                為女性安全而生，我們正在全力開發中
              </p>
              
              <div className="development-actions">
                <Link to="/contact" className="btn btn-primary btn-large">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  聯繫我們
                </Link>
                
                <Link to="/about" className="btn btn-outline btn-large">
                  認識團隊
                </Link>
              </div>

              <div className="development-status">
                <div className="status-item">
                  <span className="status-icon">🚧</span>
                  <div className="status-content">
                    <span className="status-title">開發中</span>
                    <span className="status-desc">核心功能研發</span>
                  </div>
                </div>
                <div className="status-item">
                  <span className="status-icon">🔒</span>
                  <div className="status-content">
                    <span className="status-title">隱私優先</span>
                    <span className="status-desc">端到端加密設計</span>
                  </div>
                </div>
                <div className="status-item">
                  <span className="status-icon">👥</span>
                  <div className="status-content">
                    <span className="status-title">用戶導向</span>
                    <span className="status-desc">基於真實需求</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="phone-showcase">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="app-preview">
                      <div className="status-bar"></div>
                      <div className="app-content">
                        <div className="development-preview">
                          <h3>SAFII 開發中</h3>
                          <p>即將為你帶來全新的安全體驗</p>
                        </div>
                        <div className="feature-preview">
                          <div className="preview-feature active">🔄 適度追蹤系統</div>
                          <div className="preview-feature">🗺️ 智慧安全路徑</div>
                          <div className="preview-feature">👥 女性互助網路</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="development-progress">
        <div className="container">
          <h2 className="section-title">開發進度</h2>
          <div className="progress-grid">
            {developmentProgress.map((feature, index) => (
              <div key={index} className="progress-item">
                <div className="progress-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className={`status-badge ${feature.status}`}>
                    {feature.status === 'in-progress' ? '開發中' : '規劃中'}
                  </div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="development-timeline">
        <div className="container">
          <h2 className="section-title">開發時間線</h2>
          <div className="timeline">
            <div className="timeline-item completed">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>概念設計</h3>
                <p>完成用戶研究與產品概念設計</p>
                <span className="timeline-date">2024 Q1</span>
              </div>
            </div>
            <div className="timeline-item completed">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>技術架構</h3>
                <p>建立系統架構與隱私保護機制</p>
                <span className="timeline-date">2024 Q2</span>
              </div>
            </div>
            <div className="timeline-item active">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>核心功能開發</h3>
                <p>適度追蹤與女性互助功能開發中</p>
                <span className="timeline-date">2024 Q3-Q4</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>測試與優化</h3>
                <p>邀請用戶測試，收集回饋並優化</p>
                <span className="timeline-date">2025 Q1</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>正式上線</h3>
                <p>SAFII 正式發布，為女性安全守護</p>
                <span className="timeline-date">2025 Q2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">我們的核心價值</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🔒</div>
              <h3>隱私優先</h3>
              <p>端到端加密保護，確保個人資料安全，讓你安心使用每項功能。</p>
            </div>
            <div className="value-item">
              <div className="value-icon">⚖️</div>
              <h3>適度追蹤</h3>
              <p>不過度監控，只在必要時刻提供保護，平衡安全與隱私的需求。</p>
            </div>
            <div className="value-item">
              <div className="value-icon">👥</div>
              <h3>社群互助</h3>
              <p>建立女性互助網絡，透過科技連結彼此，讓安全不再是孤獨的守護。</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>用戶導向</h3>
              <p>深度了解女性安全需求，設計真正實用且貼心的功能體驗。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="development-cta">
        <div className="container">
          <div className="cta-content">
            <h2>想了解更多嗎？</h2>
            <p>SAFII 正在用心打造中，歡迎與我們保持聯繫，一起期待上線的那一天</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                聯繫我們
              </Link>
              
              <Link to="/about" className="btn btn-outline btn-large">
                認識團隊
              </Link>
            </div>
            <div className="development-note">
              <p>
                🚧 目前正在開發階段，預計 2025 年上線
                <br />
                有任何想法或建議，都歡迎與我們分享：
                <a href="mailto:safiihsu@gmail.com" className="email-link">safiihsu@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;