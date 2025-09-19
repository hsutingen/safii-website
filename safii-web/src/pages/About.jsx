import './About.css';

function About() {
  const teamMembers = [
    {
      name: '許庭恩 Renee',
      role: '發起人／產品策略與體驗',
      description: 'NTU 財金背景；使用者研究、產品定位、合作拓展',
      avatar: '👩‍💼'
    },
    {
      name: '楊景丞 Jensen',
      role: '產品／技術協作',
      description: 'NTU 資訊背景；前後端開發、系統架構、UIUX、AI 應用探索',
      avatar: '👨‍💻'
    },
    {
      name: '高翊茗 Iming',
      role: '產品／技術協作',
      description: 'NTU 資訊背景；前後端開發、系統架構、UIUX、AI 應用探索',
      avatar: '👨‍💻'
    },
    {
      name: '許悅恩 Reese',
      role: '財務會計／法遵',
      description: '記帳士；成本控管、金流稽核、合約與隱私合規支援',
      avatar: '👩‍💼'
    }
  ];


  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="page-title">關於我們</h1>
          <p className="page-subtitle">
            Safe for Every 'I' — Individually, Intuitively, Invisibly
          </p>
          <p className="page-description">
            為女性量身設計的隱私友善型安全守護系統
          </p>
        </div>
      </div>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>我們在解決什麼</h2>
              <div className="brand-concept">
                <h3>核心信念：安全不該靠運氣</h3>
                <p className="concept-explanation">
                  <strong>臨場失能：</strong>真正遇到危險時，人可能無法主動求救（恐懼、受限、手機不在手）。<br/>
                  <strong>隱私矛盾：</strong>希望出事有人知道，但不想每分每秒暴露行蹤。<br/>
                  <strong>城市日常風險：</strong>夜歸、通勤、短距離外出、獨居人口攀升——高頻且被忽略。<br/>
                  <strong>求助門檻高：</strong>不想麻煩親友、也不願交換私訊；需要直覺、低負擔的即時支援。
                </p>
              </div>
              <p className="mission-description">
                設計要讓「預防 → 風險降低 → 求援」自動而可控，並尊重隱私。
                兼具科技的理性與情感的溫度，把安心做成日常。
              </p>
            </div>
            <div className="mission-visual">
              <div className="mission-image-placeholder">
                <div className="placeholder-icon">🛡️</div>
                <span className="placeholder-text">品牌理念圖</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">為什麼是 SAFII</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⏱️</div>
              <h3>低門檻求助</h3>
              <p>一鍵視訊互助（可匿名／可先語音）＋一鍵通報，搶時間、降阻力。</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>隱私優先</h3>
              <p>適度追蹤（自控時長／頻率、到點自動關閉），避免長期曝露。</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🗺️</div>
              <h3>情境貼合</h3>
              <p>安全路徑、AI 假電話／警報，對應夜歸、搭車、陌生環境等日常微場景。</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤖</div>
              <h3>科技溫度</h3>
              <p>兼具科技的理性與情感的溫度，把安心做成日常習慣。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">團隊成員</h2>
          <p className="section-subtitle">
            由來自不同領域的專業人士組成，共同為女性安全而努力
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <span>{member.avatar}</span>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>加入我們的使命</h2>
            <p>如果您對我們的理念感興趣，歡迎與我們聯繫</p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">聯繫我們</a>
              <a href="/download" className="btn btn-outline">下載 APP</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;