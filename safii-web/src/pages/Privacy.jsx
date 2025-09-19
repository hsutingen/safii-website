import './Privacy.css';

function Privacy() {
  const privacyFeatures = [
    {
      icon: '🔒',
      title: '最小必要共享',
      description: '只在需要時分享位置；到點自動關閉',
      details: [
        '按時回覆 = 沒有發生危險 → 不外送位置',
        '未按時回覆 = 疑似危險 → 立即通報位置與資訊',
        '快速模式：臨時外出一鍵啟動；到點自動關閉，不留尾巴'
      ]
    },
    {
      icon: '📹',
      title: '視訊隱私保護',
      description: '視訊預設不錄影、不留檔（除非主動同意）',
      details: [
        '可先語音後開鏡頭，或全程語音',
        '匿名模式保護身份',
        '端到端加密保護通話內容'
      ]
    },
    {
      icon: '🔐',
      title: '傳輸加密',
      description: '依實作採標準協議',
      details: [
        '所有數據傳輸採用 HTTPS 加密',
        '敏感資訊採用端到端加密',
        '本地存儲數據加密保護'
      ]
    },
    {
      icon: '⚖️',
      title: '治理機制',
      description: '匿名回報、濫用偵測、違規降權／停權',
      details: [
        '24/7 監控異常行為',
        '用戶回報系統',
        '自動濫用偵測算法',
        '違規處理與申訴機制'
      ]
    },
    {
      icon: '📶',
      title: '弱網備援',
      description: '優先送出輕量文字＋座標',
      details: [
        '網絡不佳時自動切換到簡化模式',
        '關鍵資訊優先傳送',
        '離線緩存重要功能'
      ]
    }
  ];

  const usageFlow = [
    {
      step: '1',
      title: '出門前／上路中',
      description: '開啟適度追蹤（或快速模式）→ 生成安全路徑'
    },
    {
      step: '2', 
      title: '途中不安',
      description: '開 AI 假電話或視訊互助；偏離或無回覆系統會提醒'
    },
    {
      step: '3',
      title: '疑似危險',
      description: '未按時回報→ 自動通報位置；或長按一鍵通報'
    },
    {
      step: '4',
      title: '到點關閉',
      description: '行程結束自動關閉追蹤；報平安完成一次安全循環'
    }
  ];

  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="container">
          <h1 className="page-title">隱私與安全</h1>
          <p className="page-subtitle">
            Trust & Safety — 我們如何保護您的隱私
          </p>
          <p className="page-description">
            最小必要共享，只在需要時分享，不把安心建在長期曝露上
          </p>
        </div>
      </div>

      <section className="privacy-principles">
        <div className="container">
          <h2 className="section-title">隱私保護原則</h2>
          <div className="principles-grid">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="principle-card">
                <div className="principle-icon">{feature.icon}</div>
                <h3 className="principle-title">{feature.title}</h3>
                <p className="principle-description">{feature.description}</p>
                <ul className="principle-details">
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="usage-flow">
        <div className="container">
          <h2 className="section-title">使用流程 — How It Works</h2>
          <p className="section-subtitle">
            四個步驟，完成一次安全循環
          </p>
          <div className="flow-steps">
            {usageFlow.map((step, index) => (
              <div key={index} className="flow-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < usageFlow.length - 1 && (
                  <div className="step-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="privacy-commitment">
        <div className="container">
          <div className="commitment-content">
            <h2>我們的承諾</h2>
            <div className="commitment-text">
              <p>
                <strong>隱私友善設計：</strong>我們深信隱私不是特權，而是基本權利。SAFII 的每一個功能都以隱私優先為設計原則。
              </p>
              <p>
                <strong>透明與控制：</strong>您始終掌握自己的數據。何時分享、分享什麼、分享給誰，都由您決定。
              </p>
              <p>
                <strong>持續改進：</strong>我們持續評估和改進我們的安全措施，確保為您提供最高水準的隱私保護。
              </p>
            </div>
            <div className="commitment-actions">
              <a href="/faq" className="btn btn-outline">查看常見問答</a>
              <a href="/contact" className="btn btn-primary">聯繫我們</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;