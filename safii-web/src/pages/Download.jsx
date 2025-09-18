import { useState } from 'react';
import './Download.css';

function Download() {
  const [selectedPlatform, setSelectedPlatform] = useState('ios');

  const appFeatures = [
    {
      icon: '🚨',
      title: '緊急求助',
      description: '一鍵發送求救訊號'
    },
    {
      icon: '📍',
      title: '位置分享',
      description: '即時分享位置給信任聯絡人'
    },
    {
      icon: '🗺️',
      title: '安全路線',
      description: '智慧推薦最安全的路線'
    },
    {
      icon: '👥',
      title: '互助社群',
      description: '加入女性互助安全網絡'
    },
    {
      icon: '📞',
      title: '假電話',
      description: '緊急時刻的偽裝工具'
    },
    {
      icon: '⌚',
      title: '穿戴連動',
      description: '支援智慧手環等穿戴裝置'
    }
  ];

  const systemRequirements = {
    ios: {
      version: 'iOS 14.0 或更新版本',
      device: 'iPhone、iPad 和 iPod touch',
      storage: '需要 120 MB 可用空間',
      network: '需要網路連線'
    },
    android: {
      version: 'Android 8.0 或更新版本',
      device: '支援大部分 Android 裝置',
      storage: '需要 150 MB 可用空間',
      network: '需要網路連線'
    }
  };

  const screenshots = [
    {
      id: 1,
      title: '主畫面',
      description: '簡潔直觀的主要功能介面'
    },
    {
      id: 2,
      title: '緊急求助',
      description: '快速觸發緊急求助功能'
    },
    {
      id: 3,
      title: '安全路線',
      description: '智慧路線規劃與危險警示'
    },
    {
      id: 4,
      title: '社群互助',
      description: '女性互助社群功能'
    }
  ];

  return (
    <div className="download-page">
      <div className="download-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="page-title">下載 SAFII</h1>
              <p className="page-subtitle">
                立即開始你的安全守護之旅
              </p>
              
              <div className="download-buttons">
                <a 
                  href="#" 
                  className="download-btn app-store"
                  onClick={() => setSelectedPlatform('ios')}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="btn-text">
                    <span className="btn-line1">Download on the</span>
                    <span className="btn-line2">App Store</span>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="download-btn google-play"
                  onClick={() => setSelectedPlatform('android')}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="btn-text">
                    <span className="btn-line1">GET IT ON</span>
                    <span className="btn-line2">Google Play</span>
                  </div>
                </a>
              </div>

              <div className="app-stats">
                <div className="stat">
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
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">下載次數</span>
                </div>
                <div className="stat">
                  <span className="stat-number">免費</span>
                  <span className="stat-label">完全免費使用</span>
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
                        <div className="welcome-message">
                          <h3>歡迎使用 SAFII</h3>
                          <p>你的專屬安全守護</p>
                        </div>
                        <div className="quick-setup">
                          <div className="setup-step active">設定緊急聯絡人</div>
                          <div className="setup-step">選擇通知偏好</div>
                          <div className="setup-step">完成安全設定</div>
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

      <section className="features-preview">
        <div className="container">
          <h2 className="section-title">主要功能</h2>
          <div className="features-grid">
            {appFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="screenshots-section">
        <div className="container">
          <h2 className="section-title">應用程式預覽</h2>
          <div className="screenshots-grid">
            {screenshots.map((screenshot) => (
              <div key={screenshot.id} className="screenshot-item">
                <div className="screenshot-image">
                  <div className="placeholder-icon">📱</div>
                  <span className="placeholder-text">{screenshot.title}</span>
                </div>
                <h3 className="screenshot-title">{screenshot.title}</h3>
                <p className="screenshot-description">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="requirements-section">
        <div className="container">
          <h2 className="section-title">系統需求</h2>
          <div className="platform-tabs">
            <button 
              className={`tab-btn ${selectedPlatform === 'ios' ? 'active' : ''}`}
              onClick={() => setSelectedPlatform('ios')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              iOS
            </button>
            <button 
              className={`tab-btn ${selectedPlatform === 'android' ? 'active' : ''}`}
              onClick={() => setSelectedPlatform('android')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4486.9993.9993s-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
              </svg>
              Android
            </button>
          </div>
          
          <div className="requirements-content">
            <div className="requirements-grid">
              <div className="requirement-item">
                <h4>系統版本</h4>
                <p>{systemRequirements[selectedPlatform].version}</p>
              </div>
              <div className="requirement-item">
                <h4>支援裝置</h4>
                <p>{systemRequirements[selectedPlatform].device}</p>
              </div>
              <div className="requirement-item">
                <h4>儲存空間</h4>
                <p>{systemRequirements[selectedPlatform].storage}</p>
              </div>
              <div className="requirement-item">
                <h4>網路需求</h4>
                <p>{systemRequirements[selectedPlatform].network}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-cta">
        <div className="container">
          <div className="cta-content">
            <h2>準備開始了嗎？</h2>
            <p>立即下載 SAFII，開始你的安全守護之旅</p>
            <div className="final-download-buttons">
              <a href="#" className="download-btn app-store">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-line1">Download on the</span>
                  <span className="btn-line2">App Store</span>
                </div>
              </a>
              
              <a href="#" className="download-btn google-play">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="btn-text">
                  <span className="btn-line1">GET IT ON</span>
                  <span className="btn-line2">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;