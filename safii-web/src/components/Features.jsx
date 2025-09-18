import './Features.css';

function Features() {
  const features = [
    {
      id: 1,
      icon: '🚨',
      title: '即時守護',
      subtitle: '緊急警報 · 假電話 · 強噪音',
      description: '一鍵觸發多重防護機制，緊急時刻自動發送位置給信任聯絡人，假電話與強噪音功能有效嚇阻潛在危險。',
      features: [
        '一鍵緊急求助',
        '自動位置傳送',
        '假電話偽裝',
        '高分貝警報音'
      ],
      bgColor: 'linear-gradient(135deg, #FFE5EC, #FFF0F3)',
      iconBg: 'linear-gradient(135deg, #FF6B6B, #FF5722)'
    },
    {
      id: 2,
      icon: '🗺️',
      title: '智慧路線規劃',
      subtitle: '安全路線 · 危險區域警示',
      description: '基於大數據分析提供最安全的路線建議，實時標注便利商店、警察局等安全地點，主動避開高風險區域。',
      features: [
        '最安全路線推薦',
        '即時危險區域警示',
        '安全地點標記',
        '夜間專屬路線'
      ],
      bgColor: 'linear-gradient(135deg, #E3F2FD, #F3F8FF)',
      iconBg: 'linear-gradient(135deg, #45B7D1, #1976D2)'
    },
    {
      id: 3,
      icon: '👥',
      title: '女性互助網絡',
      subtitle: '附近女性協助 · 社群守護',
      description: '建立在地女性互助社群，就近提供協助與陪伴。透過匿名系統保護隱私，同時建立強大的安全守護網。',
      features: [
        '附近女性即時協助',
        '匿名安全互助',
        '社群守護圈',
        '24小時陪伴服務'
      ],
      bgColor: 'linear-gradient(135deg, #F3E5F5, #FAF0FB)',
      iconBg: 'linear-gradient(135deg, #AB47BC, #8E24AA)'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">三大核心功能</h2>
          <p className="section-subtitle">
            透過科技與社群的力量，為每一位女性提供全方位的安全守護
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="feature-card"
              style={{ background: feature.bgColor }}
            >
              <div className="feature-header">
                <div 
                  className="feature-icon"
                  style={{ background: feature.iconBg }}
                >
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-title-group">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-subtitle">{feature.subtitle}</p>
                </div>
              </div>

              <p className="feature-description">{feature.description}</p>

              <ul className="feature-list">
                {feature.features.map((item, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="feature-action">
                <button className="feature-btn">
                  了解更多
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 3l4.5 4.5-4.5 4.5-1-1 3.5-3.5L5.5 4l1-1z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;