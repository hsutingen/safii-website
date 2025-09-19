import { useState } from 'react';
import './Features.css';

// Import media files
import moderateTrackingSettings from '../assets/media/features/moderate-tracking-settings.png';
import moderateTrackingDanger from '../assets/media/features/moderate-tracking-danger.mov';
import moderateTrackingEmergency from '../assets/media/features/moderate-tracking-emergency-contacts.mov';
import womenMutualAid from '../assets/media/features/women-mutual-aid.mov';

function Features() {
  const [activeMedia, setActiveMedia] = useState(null);
  const [showMediaModal, setShowMediaModal] = useState(false);

  const openMediaModal = (media) => {
    setActiveMedia(media);
    setShowMediaModal(true);
  };

  const closeMediaModal = () => {
    setShowMediaModal(false);
    setActiveMedia(null);
  };
  const features = [
    {
      id: 1,
      icon: '⏱️',
      title: '適度追蹤',
      subtitle: 'Moderate Tracking — 本系統核心',
      description: '事先設定追蹤時長，按時回覆等於安全，未回覆則自動通報位置。只在需要時分享，不把安心建在長期曝露上。',
      features: [
        '自控時長與頻率',
        '到點自動關閉',
        '未回報即求援',
        '隱私優先設計'
      ],
      media: [
        {
          type: 'image',
          src: moderateTrackingSettings,
          title: '模式設定',
          description: '輕鬆設定追蹤時長與回報頻率'
        },
        {
          type: 'video',
          src: moderateTrackingDanger,
          title: '危險偵測',
          description: '系統自動偵測異常並發出警報'
        },
        {
          type: 'video',
          src: moderateTrackingEmergency,
          title: '緊急聯絡',
          description: '一鍵聯繫緊急聯絡人'
        }
      ],
      bgColor: 'var(--safii-pink)',
      iconBg: 'linear-gradient(135deg, #f3c5bd, #ffc097)',
      isPrimary: true
    },
    {
      id: 2,
      icon: '🗺️',
      title: '安全路徑',
      subtitle: 'Safe Route',
      description: '參考監視器分佈與明暗度，標紅提醒風險路段，標示便利商店、警局等據點，偏離路線即時提醒。',
      features: [
        '監視器分佈分析',
        '風險路段標紅',
        '安全據點標示',
        '偏離路線提醒'
      ],
      bgColor: 'var(--safii-blue)',
      iconBg: 'linear-gradient(135deg, #d2dfe8, #a8d0e6)'
    },
    {
      id: 3,
      icon: '📞',
      title: 'AI 假電話',
      subtitle: 'Fake Call with AI',
      description: 'AI 生成自然對話，讓你流暢假裝通話形成嚇阻。內建多種情境身份，可延遲來電，害怕時提供文字語音安撫。',
      features: [
        'AI 自然對話生成',
        '多種情境身份',
        '延遲來電設定',
        '情緒安撫功能'
      ],
      bgColor: 'var(--safii-yellow)',
      iconBg: 'linear-gradient(135deg, #fcdc8e, #f4d67f)'
    },
    {
      id: 4,
      icon: '🚨',
      title: '一鍵通報',
      subtitle: 'Emergency Alert',
      description: '長按啟動防誤觸，即時定位加情境文字一鍵送出。不需講電話、不需敘述地址，爭取反應時間。',
      features: [
        '長按防誤觸',
        '即時定位發送',
        '情境文字描述',
        '快速通報群組'
      ],
      bgColor: 'var(--safii-green)',
      iconBg: 'linear-gradient(135deg, #dae0dc, #c8d6d3)'
    },
    {
      id: 5,
      icon: '👥',
      title: '女性互助',
      subtitle: '視訊陪走｜降低求助門檻',
      description: '一鍵建立視訊房，可匿名、可先語音。優先媒合距離近的守護者，在不安但尚未事故的黃金時間陪你走。',
      features: [
        '一鍵視訊陪走',
        '匿名保護隱私',
        '距離優先媒合',
        '黃金時間支援'
      ],
      media: [
        {
          type: 'video',
          src: womenMutualAid,
          title: '視訊陪走',
          description: '女性互助網路，視訊陪走降低求助門檻'
        }
      ],
      bgColor: 'var(--safii-orange)',
      iconBg: 'linear-gradient(135deg, #ffc097, #ffb088)'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">五大核心功能</h2>
          <p className="section-subtitle">
            以「適度追蹤」為核心，建立隱私友善的完整安全生態系統
          </p>
          <p className="section-description">
            低門檻求助、隱私優先、情境貼合——安全不該靠運氣
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`feature-card ${feature.isPrimary ? 'primary-feature' : ''}`}
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

              {feature.media && (
                <div className="feature-media-preview">
                  <div className="media-thumbnails">
                    {feature.media.slice(0, 3).map((media, index) => (
                      <div 
                        key={index} 
                        className="media-thumbnail"
                        onClick={() => openMediaModal(media)}
                      >
                        {media.type === 'image' ? (
                          <img src={media.src} alt={media.title} />
                        ) : (
                          <div className="video-thumbnail">
                            <video src={media.src} muted />
                            <div className="play-overlay">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        )}
                        <span className="media-title">{media.title}</span>
                      </div>
                    ))}
                  </div>
                  {feature.media.length > 3 && (
                    <p className="media-count">+{feature.media.length - 3} 更多內容</p>
                  )}
                </div>
              )}

              <div className="feature-action">
                <button 
                  className="feature-btn"
                  onClick={() => feature.media && openMediaModal(feature.media[0])}
                >
                  {feature.media ? '觀看示範' : '了解更多'}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M6.5 3l4.5 4.5-4.5 4.5-1-1 3.5-3.5L5.5 4l1-1z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Media Modal */}
        {showMediaModal && activeMedia && (
          <div className="media-modal-overlay" onClick={closeMediaModal}>
            <div className="media-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeMediaModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              
              <div className="modal-content">
                <div className="modal-media">
                  {activeMedia.type === 'image' ? (
                    <img src={activeMedia.src} alt={activeMedia.title} />
                  ) : (
                    <video 
                      src={activeMedia.src} 
                      controls 
                      autoPlay
                      style={{ maxWidth: '100%', maxHeight: '70vh' }}
                    />
                  )}
                </div>
                
                <div className="modal-info">
                  <h3 className="modal-title">{activeMedia.title}</h3>
                  <p className="modal-description">{activeMedia.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;