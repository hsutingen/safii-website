import './Features.css';
import featureImage0 from '../assets/images/features/0.png';
import featureImage1 from '../assets/images/features/1.png';
import featureImage2 from '../assets/images/features/2.png';
import featureImage3 from '../assets/images/features/3.png';
import featureImage4 from '../assets/images/features/4.png';

function Features() {
  const featureImages = [featureImage0, featureImage1, featureImage2, featureImage3, featureImage4];
  const features = [
    {
      id: 1,
      title: '適度追蹤',
      description: '智慧化的位置監控系統，在保護隱私的前提下提供必要的安全追蹤。僅在緊急情況下啟動，確保個人隱私不受侵犯。',
      details: [
        '隱私優先的定位設計',
        '緊急情況自動啟動',
        '數據本地化處理',
        '可自訂追蹤範圍'
      ],
      reversed: false
    },
    {
      id: 2,
      title: '緊急通報系統',
      description: '一鍵發送位置與狀況給信任聯絡人和專業保全單位。快速、準確、可靠的求助機制，在危急時刻成為您的生命線。',
      details: [
        '一鍵緊急求助',
        '自動發送精確位置',
        '同步通知信任聯絡人',
        '專業保全單位接應'
      ],
      reversed: true
    },
    {
      id: 3,
      title: '假電話與強噪音',
      description: '模擬真實來電和產生高分貝警報音，有效嚇阻潛在危險。多種情境模式可選，幫助您在危險中脫身。',
      details: [
        '逼真的假來電界面',
        '可自訂來電者資訊',
        '高分貝警報音',
        '多種情境模式'
      ],
      reversed: false
    },
    {
      id: 4,
      title: '安全路線規劃',
      description: '基於大數據分析的智慧路線推薦，實時標注便利商店、警察局等安全地點，主動避開高風險區域，讓每一步都更安全。',
      details: [
        'AI智慧路線分析',
        '即時危險區域警示',
        '安全地點標記',
        '夜間專屬路線推薦'
      ],
      reversed: true
    },
    {
      id: 5,
      title: '女性互助社群',
      description: '建立在地女性互助網絡，提供就近協助與陪伴。透過匿名保護機制，在維護隱私的同時建立強大的安全守護網。',
      details: [
        '附近女性即時協助',
        '匿名互助保護機制',
        '社群安全守護圈',
        '24小時陪伴服務'
      ],
      reversed: false
    }
  ];

  return (
    <div className="features-page">
      <div className="features-hero">
        <div className="container">
          <h1 className="page-title">功能介紹</h1>
          <p className="page-subtitle">
            全方位的安全守護功能，用科技為每一位女性創造更安全的生活環境
          </p>
        </div>
      </div>

      <div className="features-content">
        {features.map((feature) => (
          <section 
            key={feature.id} 
            className={`feature-section ${feature.reversed ? '' : ''}`}
          >
            <div className="container">
              <div className="feature-content">
                <div className="feature-text">
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                  <ul className="feature-details">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="detail-item">
                        <span className="detail-check">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="feature-visual">
                  <img src={featureImages[feature.id - 1]} alt={feature.title} className="feature-image" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="features-cta">
        <div className="container">
          <div className="cta-content">
            <h2>體驗完整功能</h2>
            <p>我們的應用程式仍在開發中，敬請期待！</p>
            <button className="btn btn-primary btn-large" disabled>
              即將推出
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;